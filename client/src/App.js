import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "./App.css";
import Todo from "./components/Todo/Todo";
import Welcome from './Welcome';
import Music from "./components/Music/Music";
import Calculator from "./components/Calculator/Calculator";
import Chat from "./components/Chat/Chat";
import News from "./components/News/News";
import Quotes from "./components/Quotes/Quotes";
import Sidebar from "./components/macros/Sidebar";
import "./welcome.css";
import Footer from "./components/macros/Footer";
import { registerServiceWorker } from "./push-notifications";
import Install from "./components/macros/Install";
// import PushNotificationDemo from "./PushNotificationDemo";
const Loading = ({ loading }) => (loading ? <div className="app-loader">Loading...</div> : null);

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
        console.log("inside")
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        addBtn.style.display = 'inline-block';
        addD.style.display = 'block';
        cancel.addEventListener('click',(e)=>{
          e.preventDefault();
          addD.style.display = 'none';
        })
        addBtn.addEventListener('click', (e) => {
          // hide our user interface that shows our A2HS button
          addBtn.style.display = 'none';
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
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
              <Route path="/todo"  component={Todo}/>
              <Route path="/music"  component={Music}/>
              <Route path="/news"  component={News}/>
              <Route path="/calculator"  component={Calculator}/>
              <Route path="/chat"  component={Chat}/>
              <Route path="/quotes"  component={Quotes}/>
            </div>
        </Router>
        <Footer />
      </div>)
  }
}

export default App;
