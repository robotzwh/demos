import React from "react";
import Friend from "./Friend.jsx"
export default class FriendList extends React.Component{
    render(){
        var lists = [];
        for(var i=0;i<this.props.list.length;i++){
            lists.push(
                <Friend key={this.props.list[i].id} detail={this.props.list[i]} update={this.props.updateOne}></Friend>
            )
        }
        return (

              <div className="list-group">
                {lists}
              </div>
        )
    }
}
