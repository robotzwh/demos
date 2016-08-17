import React from "react"

export default class Friend extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            model:false,
            yanzhi:props.detail.yanzhi
        };
    }
    onButtonClick(){
        var nextModel = !this.state.model;
        this.setState({
            model:nextModel
        });
        if(!nextModel){
            //do Update Model
            // this.props.detail.yanzhi = this.state.yanzhi;
            this.props.update(this.props.detail.id,this.state.yanzhi)
        }
    }
    onYanZhiUpdate(e){
        this.setState({
            yanzhi:e.target.value
        })
    }

    render(){
        return(
            <a href="#" className="list-group-item">
              <span>
                {this.props.detail.name}
              </span><br/>

                {this.state.model?
                 <span><input type="text" onChange={e=>this.onYanZhiUpdate(e)} value={this.state.yanzhi} /></span>
                 :
                 <span>{this.props.detail.yanzhi}</span>
                 }
                 <br/>

                 <button onClick={e=>this.onButtonClick(e)}>{!this.state.model?"编辑":"保存"}</button>
                </a>

        )

    }
}
