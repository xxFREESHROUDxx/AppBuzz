import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "./App.css";
import Welcome from './Welcome';
// import Music from "./components/Music/Music";
import Calculator from "./components/Calculator/Calculator";
import Join from "./components/Chat/Join";
import Chat from "./components/Chat/Chat";
import News from "./components/News/News";
import Quotes from "./components/Quotes/Quotes";
import Sidebar from "./components/macros/Sidebar-bug";
import Weather from "./components/Weather/Weather";
import "./welcome.css";
import Footer from "./components/macros/Footer";
import { registerServiceWorker } from "./push-notifications";
import Install from "./components/macros/Install";
import Search from "./components/News/Search";
import Books from "./components/Books/Books";
import Currency from "./components/Currency/currency";
import {Loading} from "./components/macros/Loading";

// import PushNotificationDemo from "./PushNotificationDemo";


class App extends Component {
  // const [footer, setFooter] = useState(true);

 constructor(props){
   super(props);
   this.state = {
    loading:true
  }
 }

  componentDidMount(){
    const getExixtingSubscription = async () => {
       await registerServiceWorker().then(async function(){    
        let deferredPrompt;   
        const addBtn = document.querySelector('.add-button');
        const addD = document.querySelector('.install-dialog')
        const cancel = document.querySelector('.cancel')
        addBtn.style.display = 'none';
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        addBtn.style.display = 'inline-block';
        addD.style.display = 'block';
        cancel.addEventListener('click',(e)=>{
          e.preventDefault();
          addD.style.display = 'none';
        })
        addBtn.addEventListener('click', (e) => {
          addBtn.style.display = 'none';
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
              } else {
                console.log('User dismissed the A2HS prompt');
              }
              deferredPrompt = null;
            });
        });
      });
    })
    this.setState({
      loading:false
    });
    };
    getExixtingSubscription();
  
  }
  render(){
    return (
    <div className="body">
      <Loading loading={ this.state.loading } />
      <Install />
        <Router>
            <Sidebar />
            <div className="content">
              <Route path="/" exact component={Welcome}/>
              {/* <Route path="/music"  component={Music}/> */}
              <Route path="/news"  component={News}/>
              <Route path="/calculator"  component={Calculator}/>
              <Route path="/chat"  component={Join}/>
              <Route path="/messages" component={Chat}/>
              <Route path="/quotes"  component={Quotes}/>
              <Route path="/news_search" component={Search}/>
              <Route path="/weather" component={Weather}/>
              <Route path="/books" component={Books}/>
              <Route path="/currency" component={Currency}/>
            </div>
        </Router>
        <Footer />
      </div>)
  }
}

export default App;
