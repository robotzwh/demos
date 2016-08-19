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
    this.setState({
      filterTxt:e.target.value
    })
  }
  getNameOfYanWang(){
    var name = "";
    var yanzhi = 0;
    this.state.friends.forEach(f=>
      {
        if(f.yanzhi > yanzhi){
        yanzhi = f.yanzhi;
        name = f.name;
        }
      }
    );
    return name;
  }
  updateOne(id,yanzhi)
  {
    var friends = this.state.friends;
    friends.forEach(f=>
      {
        if(f.id == id) {
          f.yanzhi = Number(yanzhi);
        }
      }
    )
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
