import React from "react"
import axios from "axios"


export default class OneLineADay extends React.Component {

    // state of state a total guess.  No idea what server looks like right now
    // Use Date.now() for both date and post ID - two birds with one stone
    state = {
        diaryEntry: {
            post:"",
            id: Date.now(),
        }
    }
    // Just get it rendering first.  Later spin this off into its own (class?) component
    // and use an imported callback in the componentDidMount
   componentDidMount(){ 
    axios
    .get("https://onelineadaybe.herokuapp.com/")
    .then(res=>{
        console.log(res)
      //  this.setState({post=})
    })
    .catch(rej=>{
        console.log(rej)
    })
}

    render(){
        // Again, just get it working
        // Later, spin map off into its own (fucntion, not class) component, use OneLineADay for rendering only
        return (
            <div>
                {/* {this.state.diaryEntry.map(post=>{
                <div>
                    <h4>{post.id}</h4>
                    <h4>{post.post}</h4>
                </div>
            })} */}
            
                Hello from OneLineADay
            </div>

        )
    }
}