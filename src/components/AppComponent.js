
import React, { Component } from 'react';
import '../App.css';


const sex = ["male", "female"];
const type = ["close family", "far family", "friend", "collegue"];
const closeFamily=["brother", "sister", "father", "mother", "grand-father", "grand-mother", "son", "daughter", "cousin"];
const farFamilly=["brother in law", "sister in law", "father in law", "mother in law", "grand-father in law", "grand-mother in law", "son in law", "daughter in law"];
const friend=["couple", "close friend", "occasionally friend", "old friend", "childwood friend", "random people"];
const collegue=["collegue", "boss", "sous-fifre", "stagiaire"];
const proximite=["très proche", "de temps en temps", "rarement", "pratiquement jamais"];
const profession=["cadre", "commerçant", "chef d'entreprise", "auto-entrepreuneur", "professeur", "fonction publique", "politicien"];
const personality=["religieux", "athé", "sportif", "citadin", "villagois", "bobo", "rockeur"];
const interest = ["sport", "musique", "jeux de société", "jeux vidéo", "vetements", "décoration", "jardinage", "voyages", "famille"]
const goal=["funny", "usefull", "learing", "wtf"]


export default class AppComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type : "",
      person : "",
      proximite : "",
      profession:"",
      personality : [],
      interest:[],
      goal : [],
      price : []
     }
  }

  setType = (type) => {
    if(this.state.type !== type){
      this.setState({person:""})
    }
    this.setState({type})
  }

  setPerson = (person) => {
    this.setState({
      person,
    })
  }


  render(){
    return(
      <div className={"AppComponent"}>My app
        <div id={"FilterContainer"}>
          <div className={"dropdownContainer"}>
            <div className={"dropdownTitle"}>For who ?</div>
            <div className={"dropdowButton"}>{this.state.type}</div>
            {type.map((type, key)=>{return <div className={"dropdownItem"} key={key} onClick={()=>this.setType(type)}>{type}</div>})}
          </div>

          <div className={"dropdownContainer"}>
            <div className={"dropdownTitle"}>Precise</div>
            <div className={"dropdowButton"}>{this.state.person}</div>
            {this.state.type === "close family" && closeFamily.map((person, key)=>{return <div className={"dropdownItem"} key={key} onClick={()=>this.setPerson(person)}>{person}</div>})}
            {this.state.type === "far family" && farFamilly.map((person, key)=>{return <div className={"dropdownItem"} key={key} onClick={()=>this.setPerson(person)}>{person}</div>})}
            {this.state.type === "friend" && friend.map((person, key)=>{return <div className={"dropdownItem"} key={key} onClick={()=>this.setPerson(person)}>{person}</div>})}
            {this.state.type === "collegue" && collegue.map((person, key)=>{return <div className={"dropdownItem"} key={key} onClick={()=>this.setPerson(person)}>{person}</div>})}
          </div>

          <div className={"dropdownContainer"}>
            <div className={"dropdownTitle"}>Personalité</div>
            <div className={"dropdowButton"}>{this.state.personality}</div>
            {type.map((type, key)=>{return <div className={"dropdownItem"} key={key} onClick={()=>this.setType(type)}>{type}</div>})}
          </div>

        </div>
      </div>
    )
  }
}
