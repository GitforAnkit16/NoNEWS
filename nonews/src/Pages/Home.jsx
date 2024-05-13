import React,{useState,useEffect,useContext} from "react";
import { UserContext } from "../App";
import {Link} from "react-router-dom"
const Home = () => {
    const [data,setData] = useState([])
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);
    const [polls, setPolls] = useState([]);
    
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization" : "Bearer "+ localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
            fetchPolls();
        })
    },[])

    const likePost = (id) => {
        fetch('/like', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        })
        .then(res => res.json())
        .then(result => {
            // Update the post with the updated likes and user data
            setData(prevData => {
                return prevData.map(item => {
                    if (item._id === result._id) {
                        return result; // Updated post data from the server
                    } else {
                        return item;
                    }
                });
            });
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    const unlikePost = (id) => {
        fetch('/unlike', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id
            })
        })
        .then(res => res.json())
        .then(result => {
            
            setData(prevData => {
                return prevData.map(item => {
                    if (item._id === result._id) {
                        return result; 
                    } else {
                        return item;
                    }
                });
            });
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
    }
    const makeComment = (text, postId) => {
        fetch('/comment', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId,
                text
            })
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            setData(prevData => {
                const newData = prevData.map(item => {
                    if (item._id === result._id) {
                        return result;
                    } else {
                        return item;
                    }
                });
                return newData;
            });
            window.location.reload();
        }).catch(err => {
            console.log(err);
        });
    };

    const deletePost = (postId) => {
        fetch(`/deletepost/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to delete post');
            }
            return res.json();
        })
        .then(result => {
            console.log(result);
            const newData = data.filter(item => item._id !== postId);
            setData(newData);
        })
        .catch(error => {
            console.error('Error deleting post:', error.message);
        });
    }
    
    const createPoll = async (e, postId) => {
        e.preventDefault();
        try {
            const response = await fetch('/createpoll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
                body: JSON.stringify({ question, options, postId })
            });
            const data = await response.json();
            console.log('Poll created:', data);
            fetchPolls(); // Refresh the list of polls after creating a new one
        } catch (error) {
            console.error('Error creating poll:', error);
        }
    };

    useEffect(() => {
        fetchPolls();
    }, []);

    

    const handleCreatePoll = async () => {
        try {
            const response = await fetch('/createpoll', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
                body: JSON.stringify({ question, options })
            });
            const data = await response.json();
            console.log('Poll created:', data);
            fetchPolls(); // Refresh the list of polls after creating a new one
        } catch (error) {
            console.error('Error creating poll:', error);
        }
    };

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => {
        setOptions([...options, ""]);
    };

    const handleVote = async (pollId, optionIndex) => {
        try {
            const response = await fetch('/vote', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                },
                body: JSON.stringify({ pollId, optionIndex })
            });
            if (response.ok) {
                fetchPolls(); // Refresh the list of polls after voting
            } else {
                console.error('Failed to vote:', response.statusText);
            }
        } catch (error) {
            console.error('Error voting:', error);
        }
    };

    const fetchPolls = async () => {
        try {
            const response = await fetch('/polls', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('jwt')
                }
            });
            const data = await response.json();
            setPolls(data.polls);
        } catch (error) {
            console.error('Error fetching polls:', error);
        }
    };

    return (
        <div className="home">
        {
            Array.isArray(data) && data.map(item=>{
                return(
                    <div className="card home-card" key={item._id}>
                            <h5 style={{padding:"5px"}}><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id :"/profile"  }>{item.postedBy.name}</Link> {item.postedBy._id == state._id 
                            && <i className="material-icons" style={{
                                float:"right"
                            }} 
                            onClick={()=>deletePost(item._id)}
                            >delete</i>

                            }</h5>
                            <div className="card-image">
                                <img src={item.photo}/>
                            </div>
                        <div className="card-content">
                        <i className="material-icons" style={{color:"red"}}>favorite</i>
                            {item.likes.includes(state._id)
                            ? 
                             <i className="material-icons"
                                onClick={()=>{unlikePost(item._id)}}
                              >thumb_down</i>
                            : 
                            <i className="material-icons"
                                onClick={()=>{likePost(item._id)}}
                            >thumb_up</i>
                            }
                            <h6>{item.likes.length} likes</h6>
                            <h6>{item.title}</h6>
                            <p>{item.body}</p>
                            {
                                    item.comments.map(record=>{
                                        return(
                                        <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
                                       
                                        )
                                    })
                                }
                                
            {/* Form to create a poll */}
            <div className="poll-section">
                        <h2>Created Polls:</h2>
                        {polls
                            .filter(poll => poll.postId === item._id) // Filter polls by post ID
                            .map(poll => (
                                <div key={poll._id}>
                                    <h3>{poll.question}</h3>
                                    <ul>
                                        {poll.options.map((option, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleVote(poll._id, index)}
                                            >
                                                {option.text} - Votes: {option.votes}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        {/* Add poll form */}
                        <form onSubmit={(e) => createPoll(e, item._id)}>
                            <input
                                type="text"
                                placeholder="Enter your question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                            {options.map((option, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e.target.value)}
                                    placeholder={`Option ${index + 1}`}
                                />
                            ))}
                            <button onClick={addOption}>Add Option</button>
                            <button type="submit">Create Poll</button>
                        </form>
                    </div>
                                <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    makeComment(e.target[0].value,item._id)
                                }}>
                                  <input type="text" placeholder="add a comment" />  
                                </form>
                        </div>
                    </div>
                )
            })
        }
           
        </div>    
    )
}

export default Home