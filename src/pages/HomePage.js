import React from 'react';
import './HomePage.css';
import { makePlan, setCompletedCourses } from '../UserPlans/User.js'
import {Card, CardHeader, CardContent, CardMedia, MobileStepper, Button, FormGroup, TextField, MenuItem, FormControl, InputLabel, Input} from '@material-ui/core'
import Select from 'react-select';
import {courseOptions} from '../courseOptions.js'
import AsyncSelect from 'react-select/async';

const majorOptions = [
    { value: ['College of Letters and Sciences', 'Data Science'], label: 'Data Science' },
    { value: ['College of Letters and Sciences', 'Mathematics'], label: 'Mathematics' },
    { value: ['College of Letters and Sciences', 'Computer Science'], label: 'Computer Science' },  
    { value: ['College of Engineering', 'Civil Engineering'], label: 'Civil Engineering' },
    { value: ['College of Letters and Sciences', 'Statistics'], label: 'Statistics'}      
  ]
const minorOptions = [
    { value: ['College of Letters and Sciences', 'Philosophy'], label: 'Philosophy' },      
    { value: ['College of Letters and Sciences', 'Linguistics'], label: 'Linguistics' },      
    { value: ['College of Letters and Sciences','Geosystems'], label: 'Geosystems' },
    { value: ['College of Letters and Sciences','Mathematics'], label: 'Mathematics' }     
  ]

  const filterCourses = (inputValue) => {
    if (inputValue.length > 2) {
    return courseOptions.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );}
  };
  
  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterCourses(inputValue));
      }, 1000);
    });

function currentSemester () {
    var currentTime = new Date();
    var month = currentTime.getMonth() 
    var year = currentTime.getFullYear()
    if([0,1,2,3,4].indexOf(month) !== -1) {
        return 'Spring ' + year
    }
    if([5,6,7].indexOf(month) !== -1) {
        return 'Summer ' + year
    }else {
        return 'Fall ' + year
    }
}

function generateDates(start, end) {
    let listDates = [[start, []]];
    const splitStart = start.split(" ");
    let currSeason =  splitStart[0];
    let currYear = parseInt(splitStart[1], 10);
    const splitEnd = end.split(" ");
    const endSeason = splitEnd[0];
    const endYear = parseInt(splitEnd[1], 10);
    var i = 0;
    while (i < 20) {
        if (currSeason === (endSeason) && currYear === endYear) {
            break;
        }
        if (currSeason === 'Spring') {
            currSeason = 'Fall';
        } else {
            currSeason = 'Spring';
            currYear++;
        }
        listDates.push([currSeason + ' ' + currYear.toString(), []]);
        i++;
    }
    return listDates
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpPhase: 1,
            phases: 3,
            firstName:'',
            firstNameError: false,
            lastName:'',
            lastNameError: false,
            email: '',
            emailError: false,
            password: '',
            passwordError: false,
            title:'Current Plan',
            startTerm: '',
            startTermError: false,
            startYear: '',
            startYearError: false,
            endTerm: '',
            endTermError: false,
            endYear: '',
            endYearError: false,
            majors: [],
            majorError: false,
            minors: [],
            completedSemesters: [],
            compCourses: [], 
            inputValue: '',
            courseIndex: 0
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateStartTerm = this.updateStartTerm.bind(this);
        this.updateStartYear = this.updateStartYear.bind(this);
        this.updateEndTerm = this.updateEndTerm.bind(this);
        this.updateEndYear = this.updateEndYear.bind(this);
        this.updateMajor = this.updateMajor.bind(this);
        this.updateMinor = this.updateMinor.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.addPlan = this.addPlan.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this)
        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.logIn = this.logIn.bind(this);
        this.reset = this.reset.bind(this)
        this.updateCompCourses = this.updateCompCourses.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.setCourseIndex = this.setCourseIndex.bind(this)
    }

    addPlan() {
        console.log(this.state)
        const inputs = this.format();
        if (inputs[3]==='none') {
            setCompletedCourses(this.state.compCourses)
            makePlan(inputs[0], inputs[1], inputs[2], this.state.title);
            this.setState({
                title: null,
                startTerm: "",
                startYear: '',
                endTerm: "",
                endYear: '',
                majors: [],
                minors: []
        })
        } 

        if (inputs[3]==='majorError') {
            this.setState({
                majors: [],
                minors: [],
            })
        }
        
        if (inputs[3]==='minorError') {
            setCompletedCourses(this.state.compCourses)
            makePlan(inputs[0], inputs[1], inputs[2], this.state.title)
            this.setState({
                majors: [],
                minors: []
                })
        }
    }
    updateEmail(event) {
        this.setState({email: event.target.value})
    }

    updatePassword(event) {
        this.setState({password: event.target.value})
    }

    updateTitle(event) {
        this.setState({title: event.target.value})
    }
    updateStartTerm(event) {
        this.setState({startTerm: event.target.value})
    }

    updateStartYear(event) {
        this.setState({startYear: event.target.value})
    }

    updateEndTerm(event) {
        this.setState({endTerm: event.target.value})
    }

    updateEndYear(event) {
        this.setState({endYear: event.target.value})
    }

    updateMajor(option) {
        const majors = [];
        for(let i = 0; i < option.length; i++) {
            majors.push(option[i])
        }
        this.setState({majors: majors})
    }

    updateMinor(option) {
        const minors = [];
        for(let i = 0; i < option.length; i++) {
            minors.push(option[i])
        }
        this.setState({minors: minors})
    }

    firstName(event) {
        this.setState({firstName: event.target.value})
    }

    lastName(event) {
        this.setState({lastName: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleNext() {
        if (this.state.signUpPhase === 0) {
            if (this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '') {
                this.setState({
                    firstNameError: this.state.firstName === '',
                    lastNameError: this.state.lastName === '',
                    emailError: this.state.email === '',
                    passwordError: this.state.password === ''
                })
                return
            }
            this.setState({
                firstNameError: this.state.firstName === '',
                lastNameError: this.state.lastName === '',
                emailError: this.state.email === '',
                passwordError: this.state.password === ''
            })
        }
        if (this.state.signUpPhase === 1) {
            if (this.state.title === '' || this.state.startTerm === '' || this.state.startYear === '' || this.state.endTerm === '' || this.state.endYear === '' || this.state.majors === []) {
                this.setState({
                    titleError: this.state.title === '',
                    startTermError: this.state.startTerm === '',
                    startYearError:this.state.startYear === '',
                    endYearError:this.state.endYear === '',
                    endTermError:this.state.endTerm === '',
                    majorError:this.state.majors.length === 0
                })
                return
            }
                this.setState({
                    titleError: false,
                    startTermError: false,
                    startYearError:false,
                    endYearError:false,
                    endTermError:false,
                    majorError:false
                })
                var semesters = generateDates(this.state.startTerm + ' ' + this.state.startYear, currentSemester())
                var compCourses = []
                for (let i = 0; i < semesters.length - 1; i++) {
                    compCourses.push([semesters[i], []])
                }
                this.setState({
                    completedSemesters: semesters,
                    compCourses: compCourses,
                    phases: (compCourses.length === 0)? 3:4
                })
            
        }
        var x = this.state.signUpPhase + 1
        this.setState({
            signUpPhase : x
        })
    }
    handleBack() {
        var x = this.state.signUpPhase - 1
        this.setState({
            signUpPhase : x
        })
    }

    logIn(){
        this.setState({
            signUpPhase: 'login'
        })
    }

    reset() {
        this.setState({ signUpPhase: 0, infoError: false})
    }
    
    setCourseIndex(i) {
        this.setState({
            courseIndex: i
        })
    }    

    updateCompCourses(option) {
        var copy = this.state.compCourses.slice()
        var courses = []
        for (let i = 0; i < option.length; i ++) {
            courses.push(option[i].value)
        }
        copy[this.state.courseIndex][1] = courses
        this.setState({
            compCourses: copy
        })
    }

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
      };

  render() {
      console.log(this.state.compCourses)
    return(
      <div className = "HomePage">
        <img className = 'Logo' src={require("../Images/findyourpath.png")} height = '650vw' width = '650vw'/>
            <div className = 'SignUp'>
                <Card className ='SignUpCard'>
                    {this.state.signUpPhase === 0 &&
                    <CardContent className = 'SignUpBody'>
                        <img className = 'Title' src={require("../Images/BearTracksTitle.png")} height = '100vw' width = '325vw'/>
                            {(!this.state.firstNameError) && 
                            <FormGroup controlId = "FirstName">
                                <TextField
                                        label="First Name"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.firstName}
                                        value = {this.state.firstName}
                                    />
                            </FormGroup>}
                            {(this.state.firstNameError) && 
                            <FormGroup controlId = "FirstName">
                                <TextField error
                                        label="First Name"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.firstName}
                                        value = {this.state.firstName}
                                    />
                            </FormGroup>}

                            {(!this.state.lastNameError) &&
                            <FormGroup controlId = "LastName">
                            <TextField
                                        label="Last Name"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.lastName}
                                        value = {this.state.lastName}
                                    />
                            </FormGroup>}
                            {(this.state.lastNameError) &&
                            <FormGroup controlId = "LastName">
                            <TextField error
                                        label="Last Name"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.lastName}
                                        value = {this.state.lastName}
                                    />
                            </FormGroup>}

                            {!this.state.emailError &&
                            <FormGroup controlId = "UserEmail">
                            <TextField
                                        label="Email"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updateEmail}
                                        value = {this.state.email}
                                    />
                            </FormGroup>}
                            {this.state.emailError &&
                            <FormGroup controlId = "UserEmail">
                            <TextField error
                                        label="Email"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updateEmail}
                                        value = {this.state.email}
                                    />
                            </FormGroup>}

                            {!this.state.passwordError &&
                            <FormGroup controlId = "UserPassWord">
                            <TextField 
                                        label="Password"
                                        type = 'password'
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updatePassword}
                                        value = {this.state.password}
                                    />
                            </FormGroup>}
                            {this.state.passwordError &&
                            <FormGroup controlId = "UserPassWord">
                            <TextField error
                                        label="Password"
                                        type = 'password'
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updatePassword}
                                        value = {this.state.password}
                                    />
                            </FormGroup>}
                            {(this.state.passwordError||this.state.firstNameError||this.state.lastNameError||this.state.emailError) && 
                            <div style = {{textAlign: 'center'}}>
                                <a style = {{color: 'red'}}>This field is required.</a>
                            </div>}
                            <div style = {{textAlign: 'center'}}>
                                <Button style = {{marginTop: '1vw'}}variant = 'contained' color = 'primary' onClick = {()=>this.handleNext()}>
                                Sign Up
                                </Button>
                            </div>
                    </CardContent>}
                    {this.state.signUpPhase === 1 && 
                    <CardContent className = 'SignUpBody'>
                    <img className = 'Title' src={require("../Images/BearTracksTitle.png")} height = '100vw' width = '325vw'/>
                        {(!this.state.startTermError && !this.state.startYearError) &&
                        <div style = {{ marginBottom: '-8px'}}>
                            <a style = {{size: '16vw', fontWeight:'800'}}>First Semester</a>
                        </div>}
                        {(this.state.startYearError || this.state.startTermError) &&
                        <div style = {{ marginBottom: '-8px'}}>
                            <a style = {{size: '16vw', fontWeight:'800', color:'red'}}>First Semester</a>
                        </div>}
                        {/* {!this.state.titleError && 
                        <FormGroup controlId="planTitle">
                            <TextField
                                        label="Plan Title"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updateTitle}
                                        value = {this.state.title}
                                    />
                        </FormGroup>}

                        {this.state.titleError && 
                        <FormGroup controlId="planTitle">
                            <TextField error
                                        label="Plan Title"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updateTitle}
                                        value = {this.state.title}
                                    />
                        </FormGroup>} */}
                        
                        <FormGroup row controlId="selectFirstTerm">
                            {!this.state.startTermError && 
                            <TextField
                                select
                                label="First Term"
                                margin="normal"
                                variant = 'outlined'
                                style = {{width: '49%'}}
                                onChange={this.updateStartTerm}
                                value = {this.state.startTerm}>
                                {[{label: 'Fall', value: 'Fall'}, {label: 'Spring', value: 'Spring'}, {label: 'Summer', value: 'Summer'}].map(name => (
                                    <MenuItem key={name} value={name.value}>
                                    {name.label}
                                    </MenuItem>
                                ))}
                                </TextField>}
                                {this.state.startTermError && 
                                <TextField error
                                    select
                                    label="First Term"
                                    margin="normal"
                                    variant = 'outlined'
                                    style = {{width: '49%'}}
                                    onChange={this.updateStartTerm}
                                    value = {this.state.startTerm}>
                                    {[{label: 'Fall', value: 'Fall'}, {label: 'Spring', value: 'Spring'}, {label: 'Summer', value: 'Summer'}].map(name => (
                                        <MenuItem key={name} value={name.value}>
                                        {name.label}
                                        </MenuItem>
                                    ))}
                                </TextField>}

                           {!this.state.startYearError && 
                           <TextField
                            select
                            label="First Year"
                            margin="normal"
                            variant = 'outlined'
                            style = {{width: '49%', marginLeft: '2%'}}
                            onChange={this.updateStartYear}
                            value = {this.state.startYear}>
                            {[{label: '2016', value: '2016'}, {label: '2017', value: '2017'}, {label: '2018', value: '2018'}, {label: '2019', value: '2019'}, {label: '2020', value: '2020'}].map(name => (
                                <MenuItem key={name} value={name.value}>
                                {name.label}
                                </MenuItem>
                            ))}
                            </TextField>}
                            {this.state.startYearError && 
                           <TextField
                            select
                            error
                            label="First Year"
                            margin="normal"
                            variant = 'outlined'
                            style = {{width: '49%', marginLeft: '2%'}}
                            onChange={this.updateStartYear}
                            value = {this.state.startYear}>
                            {[{label: '2016', value: '2016'}, {label: '2017', value: '2017'}, {label: '2018', value: '2018'}, {label: '2019', value: '2019'}, {label: '2020', value: '2020'}].map(name => (
                                <MenuItem key={name} value={name.value}>
                                {name.label}
                                </MenuItem>
                            ))}
                            </TextField>}
                        </FormGroup>
                        
                        {(!this.state.endTermError && !this.state.endYearError) &&
                        <div style = {{ marginTop: '10px', marginBottom: '-8px'}}>
                            <a style = {{size: '16vw', fontWeight:'800'}}>Last Semester</a>
                        </div>}
                        {(this.state.endTermError || this.state.endYearError) &&
                        <div style = {{ marginTop: '10px', marginBottom: '-8px'}}>
                            <a style = {{size: '16vw', fontWeight:'800', color:'red'}}>Last Semester</a>
                        </div>}
                        <FormGroup row controlId="selectLastTerm">
                        {!this.state.endTermError && 
                        <TextField
                            select
                            label="Last Term"
                            margin="normal"
                            variant = 'outlined'
                            style = {{width: '49%'}}
                            onChange={this.updateEndTerm}
                            value = {this.state.endTerm}>
                            {[{label: 'Fall', value: 'Fall'}, {label: 'Spring', value: 'Spring'}, {label: 'Summer', value: 'Summer'}].map(name => (
                                <MenuItem key={name} value={name.value}>
                                {name.label}
                                </MenuItem>
                            ))}
                            </TextField>}
                            {this.state.endTermError && 
                            <TextField
                            error
                            select
                            label="Last Term"
                            margin="normal"
                            variant = 'outlined'
                            style = {{width: '49%'}}
                            onChange={this.updateEndTerm}
                            value = {this.state.endTerm}>
                            {[{label: 'Fall', value: 'Fall'}, {label: 'Spring', value: 'Spring'}, {label: 'Summer', value: 'Summer'}].map(name => (
                                <MenuItem key={name} value={name.value}>
                                {name.label}
                                </MenuItem>
                            ))}
                            </TextField>}

                            {!this.state.endYearError && 
                            <TextField
                            select
                            label="Last Year"
                            margin="normal"
                            variant = 'outlined'
                            style = {{width: '49%', marginLeft: '2%'}}
                            onChange={this.updateEndYear}
                            value = {this.state.endYear}>
                            {[{label: '2020', value: '2020'}, {label: '2021', value: '2021'}, {label: '2022', value: '2022'}, {label: '2023', value: '2023'}, {label: '2024', value: '2024'}].map(name => (
                                <MenuItem key={name} value={name.value}>
                                {name.label}
                                </MenuItem>
                            ))}
                            </TextField>}
                            {this.state.endYearError && 
                            <TextField
                            error
                            select
                            label="Last Year"
                            margin="normal"
                            variant = 'outlined'
                            style = {{width: '49%', marginLeft: '2%'}}
                            onChange={this.updateEndYear}
                            value = {this.state.endYear}>
                            {[{label: '2020', value: '2020'}, {label: '2021', value: '2021'}, {label: '2022', value: '2022'}, {label: '2023', value: '2023'}, {label: '2024', value: '2024'}].map(name => (
                                <MenuItem key={name} value={name.value}>
                                {name.label}
                                </MenuItem>
                            ))}
                            </TextField>}
                        </FormGroup>

                        {!this.state.majorError && 
                        <div>
                            <div style = {{ marginTop: '10px', marginBottom: '-2px'}}>
                                <a style = {{size: '16vw', fontWeight:'800'}}>Intended Majors</a>
                            </div>
                            <FormGroup controlId="editMajors" style = {{marginTop: '.5vw'}}>
                            <Select
                                isMulti
                                name="intendedMajors"
                                className="intendedMajors"
                                options={majorOptions}
                                onChange = {this.updateMajor}
                                ref = {this.majorInput}
                            />
                            </FormGroup>
                        </div>}
                        {this.state.majorError &&
                        <div>
                            <div style = {{ marginTop: '10px', marginBottom: '-2px'}}>
                                <a style = {{size: '16vw', fontWeight:'800', color:'red'}}>Intended Majors</a>
                            </div>
                            <FormGroup controlId="editMajors" style = {{marginTop: '.5vw'}}>
                                    <Select
                                        isMulti
                                        name="intendedMajors"
                                        className="intendedMajors"
                                        options={majorOptions}
                                        onChange = {this.updateMajor}
                                        ref = {this.majorInput}
                                        styles={{
                                            container: base => ({
                                              ...base,
                                              border: 'solid 1px red',
                                              borderRadius: '5px',
                                              padding: 0,
                                            }),
                                            placeholder: base => ({
                                                ...base,
                                                fontSize: '1em',
                                                color: 'red',
                                                fontWeight: 400,
                                              })}}
                                    />
                            </FormGroup>
                        </div>}

                        <div style = {{ marginTop: '1vw', marginBottom: '-2px'}}>
                            <a style = {{size: '16vw', fontWeight:'800'}}>Intended Minors</a>
                        </div>
                        <FormGroup controlId="editMinors" style = {{marginTop: '.5vw'}}>
                                <Select
                                    isMulti
                                    name="intendedMinors"
                                    className="intendedMinors"
                                    options={minorOptions}
                                    onChange = {this.updateMinor}
                                    ref = {this.minorInput}   
                                />
                        </FormGroup>
                        {(this.state.titleError||this.state.startTermError||this.state.startYearError||this.state.endYearError||this.state.endTermError||this.state.majorError)&&
                        <div style = {{textAlign: 'center', marginTop: '1vw'}}>
                        <a style = {{color: 'red'}}>This field is required.</a>
                    </div>}
                    </CardContent>}

                    {this.state.signUpPhase === this.state.phases - 2 && this.state.compCourses.length !== 0 &&
                    <CardContent className = 'SignUpBody'>
                        <img className = 'Title' src={require("../Images/BearTracksTitle.png")} height = '100vw' width = '325vw'/>  
                        {this.state.compCourses.map((semester, index) => 
                            <div style = {{marginBottom: '1vw'}}>                            
                                <div>
                                    <a>Input completed courses for {this.state.compCourses[index][0]}</a>
                                </div>
                                <FormGroup>
                                    <AsyncSelect
                                        isMulti
                                        cacheOptions
                                        defaultOptions
                                        loadOptions={promiseOptions}
                                        onClick= {()=>this.setCourseIndex(index)}
                                        onChange = {this.updateCompCourses}
                                    />
                                </FormGroup>
                            </div>)}
                    </CardContent>}


                    {this.state.signUpPhase === this.state.phases - 1 &&
                    <CardContent className = 'SignUpBody'>
                        <img className = 'Title' src={require("../Images/BearTracksTitle.png")} height = '100vw' width = '325vw'/>
                        <h1>Congratulations {this.state.firstName}!</h1>
                        <h1>Your BearTracks account has been created</h1>
                        <Button onClick = {() => this.addPlan()} onClick = {()=>this.props.toPlanner()}>
                            Take me to my peronsal planner
                        </Button>
                    </CardContent>}
                    {this.state.signUpPhase === 'login' &&
                    <CardContent className = 'SignUpBody'>
                        <img className = 'Title' src={require("../Images/BearTracksTitle.png")} height = '100vw' width = '325vw'/>
                        <FormGroup controlId = "UserEmail">
                            <TextField
                                        label="Email"
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updateEmail}
                                        value = {this.state.updateEmail}
                                    />
                            </FormGroup>
                            <FormGroup controlId = "UserPassWord">
                            <TextField
                                        label="Password"
                                        type = 'password'
                                        margin="normal"
                                        variant="outlined"
                                        onChange={this.updatePassword}
                                        value = {this.state.password}
                                    />
                            </FormGroup>
                            <div style = {{textAlign: 'center', marginTop: '1vw'}}>
                            <Button variant = 'contained' color = 'primary' onClick = {()=>this.props.toPlanner()} >
                            Log In
                            </Button>
                        </div>
                    </CardContent>}
                </Card>
                <Card className = 'stepper'>
                    <CardContent>
                    {(this.state.signUpPhase !== 0 && this.state.signUpPhase !== 'login') &&
                        <MobileStepper
                            className = 'stepper'
                            variant="dots"
                            steps={this.state.phases}
                            position="static"
                            activeStep={this.state.signUpPhase}
                            nextButton={
                                <Button size="small" onClick={this.handleNext} disabled={this.state.signUpPhase === 3}>
                                Next
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={this.handleBack} disabled={this.state.signUpPhase === 0}>
                                Back
                                </Button>} />}
                    {this.state.signUpPhase === 0 &&
                        <div style={{textAlign: 'center'}}>
                            <a>Have an account?</a>
                            <a style = {{marginLeft: '5px', color: '#2074BD'}} onClick = {()=>this.logIn()}>Log in</a>
                        </div>}
                    {this.state.signUpPhase === 'login' &&
                        <div style={{textAlign: 'center'}}>
                        <a>Don't have an account?</a>
                        <a style = {{marginLeft: '5px', color: '#2074BD'}} onClick = {()=>this.reset()}>Sign Up</a>
                    </div>}
                    </CardContent>
                </Card>
            </div>
      </div>

    );
  }
}



export default HomePage;