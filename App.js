import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio,Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  
    state = {
      name:"",
      color:"",
      movies:[],
      gender:""
    };
    
    
    onChange = (fieldName)=>{
      return (event)=>{
        var state = this.state;
        state[fieldName]=event.target.value;
        this.setState(state);
      }
    };
    
    checkboxChange = (fieldName)=>{
      return (event)=>{
        var targetArray = this.state[fieldName];
        if(targetArray.indexOf(event.target.value) >=0)
         targetArray.splice(
           targetArray.indexOf(event.target.value),
           1
         );
        else
        targetArray.push(event.target.value);
        
          var state = this.state;
          state[fieldName]=targetArray;
          this.setState(state);
      }
    };
    
    
  render() {
    return (
      <div className="container">
        <div className="page-header">
          
          <h2>Student Survey!!</h2>
        </div>
        <p className="jumbotron">
        <Grid>
        <Row>
         <Col md={6}>
        <Form>
          <FormGroup>
            <ControlLabel>Name please...</ControlLabel>
            <FormControl 
            type="text" 
            placeholder="Name here..."
            value={this.state.name}
            onChange={this.onChange('name')}
            />
            <HelpBlock>Use to identify you</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Choose Favorite Color</ControlLabel>
            <FormControl componentClass="select" 
            placeholder="Color here..."
            value={this.state.color}
            onChange={this.onChange('color')}
            >
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </FormControl>
            <HelpBlock>Use to identify you</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Favorite Movies</ControlLabel>
            <Checkbox value="Harry Potter" 
                      checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>
                      Harry Potter
            </Checkbox>
            <Checkbox value="Lord Of The Rings"
                      checked={this.state.movies.indexOf('Lord Of The Rings')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>
                      Lord of the Rings
            </Checkbox>
            <Checkbox value="Twilight"
                      checked={this.state.movies.indexOf('Twilight')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>
                      Twilight
            </Checkbox>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Gender </ControlLabel>
            <Radio name="gender" value="Male"
                    onChange={this.onChange('gender')}>Male</Radio>
            <Radio name="gender" value="Female"
                    onChange={this.onChange('gender')}>Female</Radio>          
          </FormGroup>
          <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-star"></span>
          Info Button</Button>
          <Button bsStyle="primary">Primary Button</Button>
          <Button bsStyle="warning">Warning Button</Button>
          <Button bsStyle="danger">Error Button</Button>
          </ButtonGroup>
          </Form>
          </Col>
           <Col md={6}>
           <strong>Name is {this.state.name}</strong><br/>
           <strong>Color is {this.state.color}</strong><br/>
           <strong>Movies is {
             this.state.movies.map((item,i)=>{
               return <div>
                <span className="label label-primary">{item}</span></div>
             })
            }</strong><br/>
           <strong>Gender is {this.state.gender}</strong><br/>
            
          <ButtonGroup>
          <Button bsStyle="info">
          <span className="glyphicon glyphicon-star"></span>
          Info Button</Button>
          <Button bsStyle="primary">Primary Button</Button>
          <Button bsStyle="warning">Warning Button</Button>
          <Button bsStyle="danger">Error Button</Button>
          </ButtonGroup>
          <Form>
          <FormGroup>
            <ControlLabel>Who is your mother?</ControlLabel>
            <FormControl 
            type="text" 
            placeholder="Name here..."
            value={this.state.mother}
            onChange={this.onChange('mother')}
            />
            <HelpBlock>Use to identify you</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Choose Favorite Color</ControlLabel>
            <FormControl componentClass="select" 
            placeholder="Color here..."
            value={this.state.color}
            onChange={this.onChange('color')}
            >
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </FormControl>
            <HelpBlock>Use to identify you</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Favorite Food</ControlLabel>
            <Checkbox value="Chicken" 
                      checked={this.state.movies.indexOf('Chicken')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>
                      Chicken
            </Checkbox>
            <Checkbox value="Spaghuetti"
                      checked={this.state.movies.indexOf('Spaghuetti')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>
                      Spaghuetti
            </Checkbox>
            <Checkbox value="Bihon"
                      checked={this.state.movies.indexOf('Bihon')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>
                      Bihon
            </Checkbox>
            <Checkbox value="Humba" 
                      checked={this.state.movies.indexOf('Humba')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>
                      Humba
            </Checkbox>
          </FormGroup>
          <FormGroup>
            <ControlLabel>What section?</ControlLabel>
            <Radio name="section" value="1"
                    onChange={this.onChange('section')}>1</Radio>
            <Radio name="section" value="2"
                    onChange={this.onChange('section')}>2</Radio>
            <Radio name="section" value="3"
                    onChange={this.onChange('section')}>3</Radio>       
                       
          </FormGroup>
          
          </Form>
          </Col>
           <Col md={6}>
           <strong>Mother`s name` is {this.state.mother}</strong><br/>
           <strong>Color is {this.state.color}</strong><br/>
           <strong>Favorite food is {
             this.state.movies.map((item,i)=>{
               return <div>
                <span className="label label-primary">{item}</span></div>
             })
            }</strong><br/>
           <strong>Section is {this.state.section}</strong><br/>
          
           
           </Col>
          </Row>
          </Grid>
        </p>
      </div>
    );
  }
}

export default App;
