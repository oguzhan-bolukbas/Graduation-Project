import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import themeFile from "./util/theme";

// MUI
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import crossingOver from "./pages/crossingOver";
import practice from "./pages/practice"
import quiz from "./pages/quiz"
import whatisGA from "./pages/whatisGA"
import gaWorkingMechanism from "./pages/GAWorkingMechanism"
import QuizLectures from "./pages/quizLectures"
import QuizProblems from "./pages/quizProblems"
import knapsackProblemPage from "./pages/knapsackProblemPage"
import tspProblemPage from "./pages/tspProblemPage"
import gaApplications from "./pages/GAApplications"
import mutation from "./pages/mutation"
import geneAndChoromosome from "./pages/geneChoromosomeAndPopulationPage"
import crossOverTypes from "./pages/CrossOverTypesPage"
import mutationTypes from "./pages/mutationTypes"
import learnKnapsackProblemPage from "./pages/learnKnapsackProblemPage"
import learnTSPPage from "./pages/learnTSPPage"
import fitnessPage from "./pages/fitnessPage"
import geneticRepresentationPage from "./pages/geneticRepresentationPage"
import selectionTypesPage from "./pages/selectionTypesPage"
import quizResults from "./pages/quizResults"
import references from "./pages/ReferencesPage"
import profile from "./pages/profile"

const theme = createMuiTheme(themeFile);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <div className="container">
              <Switch>
                <Route exact path="/" component={home}/>
                <Route path="/girisyap"  component={login}/>
                <Route path="/kayitol" component={signup}/>
                <Route path="/dersler/caprazlama/caprazlama-nedir"  component={crossingOver}/>
                <Route path="/dersler/genetik-algoritma-nedir" component={whatisGA}/>
                <Route exact path="/problemler" component={practice}/>
                <Route path="/quiz" component={quiz}/>
                <Route path="/dersler/genetik-algoritma-uygulamalari" component={gaApplications}/>
                <Route path="/dersler/genetik-algoritma-nasil-calisir" component={gaWorkingMechanism}/>
                <Route path="/quiz-dersler" component={QuizLectures}/>
                <Route path="/quiz-problemler" component={QuizProblems}/>
                <Route path="/sırtÇantasıProlemiUygula" component={knapsackProblemPage}/>
                <Route path="/geziciSatıcıProblemiUygula" component={tspProblemPage}/>
                <Route path="/dersler/mutasyon/mutasyon-nedir" component={mutation}/>
                <Route path="/dersler/gen-kromozom-populasyon" component={geneAndChoromosome}/>
                <Route path="/dersler/caprazlama/caprazlama-cesitleri" component={crossOverTypes}/>
                <Route path="/dersler/mutasyon/mutasyon-cesitleri" component={mutationTypes}/>
                <Route path="/problemler/gezici-satici-problemi/ogren" component={learnTSPPage}/>
                <Route path="/problemler/sirt-cantasi-problemi/ogren" component={learnKnapsackProblemPage}/>
                <Route path="/dersler/uygunluk" component={fitnessPage}/>
                <Route path="/dersler/genetik-kodlama" component={geneticRepresentationPage}/>
                <Route path="/dersler/secim-turleri" component={selectionTypesPage}/>
                <Route path="/genel-puan-tablosu" component={quizResults}/>
                <Route path="/referanslar" component={references}/>
                <Route path="/profil" component={profile}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;