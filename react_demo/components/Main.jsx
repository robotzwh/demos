import React from 'react';
import FriendList from "./FriendList.jsx"
export default class MainComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      friends:[
        {id:1,
          name:"chaogao",
          yanzhi:1
        },
        {
          id:2,
          name:"leila",
          yanzhi:12
        }
      ],
      filterTxt:""
    }
  }
  onFilterChange(e){
    console.log(e);
    this.setState({
      filterTxt:e.target.value
    })
  }
  getNameOfYanWang(){
    var name = "";
    var yanzhi = 0;
    for(var i=0;i<this.state.friends.length;i++){
      if(this.state.friends[i].yanzhi > yanzhi){
      console.log(this.state.friends[i].yanzhi);
      console.log(yanzhi)
        yanzhi = this.state.friends[i].yanzhi;
        name=this.state.friends[i].name;
      }
    }
    return name;
  }
  updateOne(id,yanzhi)
  {
    console.log(arguments)
    var friends = this.state.friends;
    for(var i=0;i<friends.length;i++){
      if(friends[i].id == id){
        friends[i].yanzhi = Number(yanzhi);
      }
    }
    this.setState({
      friends:friends
    })
  }
  getVisibleList(){
    var rt = [];
    var friends = this.state.friends;
    for(var i=0;i<friends.length;i++){
      if(friends[i].name.indexOf(this.state.filterTxt)>=0){
        rt.push(friends[i])
      }
    }
    return rt;
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h3>Hi My Friends</h3>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
              filter:<input type="text" value={this.state.filterTxt} onChange={e=>this.onFilterChange(e)}/>
          </div>
          <div className="col-lg-4">
              颜王：{this.getNameOfYanWang()}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FriendList list={this.getVisibleList()} updateOne={(id,yanzhi)=>this.updateOne(id,yanzhi)}></FriendList>
          </div>
        </div>
      </div>
    )
  }
}
