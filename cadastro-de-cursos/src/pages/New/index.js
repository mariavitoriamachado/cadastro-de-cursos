

/* eslint-disable no-undef */
import {
  Button,
  ButtonContainer,
  Container,
  Form,
  FormTitle,
  Section,
  Input,
  Textarea
} from "./styles";
import React, { Component} from 'react';

export default class New extends Component {
cursoData;

constructor(props) {
  super(props);

  this.onChangeName = this.onChangeName.bind(this);
  this.onChangeStartDate = this.onChangeStartDate.bind(this);
  this.onChangeEndDate = this.onChangeEndDate.bind(this);
  this.onChangeDuration = this.onChangeDuration.bind(this);
  this.onChangeDescription = this.onChangeDescription.bind(this);

  this.state = {
    name: '',
    startDate: '',    
    endDate: '',
    duration: '',
    description: '',
  }
}

onChangeName(e) {
  this.setState({ name: e.target.value })
}

onChangeStartDate(e) {
  this.setState({ startDate: e.target.value })
}

onChangeEndDate(e) {
  this.setState({ endDate: e.target.value })
}

onChangeDuration(e) {
  this.setState({ duration: e.target.value })
}

onChangeDescription(e) {
  this.setState({ description: e.target.value })
}


onSubmit(e) {
// eslint-disable-next-line
  this.setState({
    name: '',
    startDate: '',
    endDate: '',
    duration: '',
    description: ''
  });
  e.preventDefault();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //     this.cursoData = JSON.parse(localStorage.getItem('curso'));
  // }, []);

  //eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    const cursoData = localStorage.getItem('curso');
    if (cursoData) {
      this.setState({ cursoData: JSON.parse(cursoData) });
    }
  });



  // eslint-disable-next-line react-hooks/rules-of-hooks
    add()(() => {
    // eslint-disable-next-line no-unused-vars
    var cursos = this.setState;
    if (localStorage.getItem('curso') == null) {
      // eslint-disable-next-line
    this.setState({
    name: '',
    startDate: '',
    endDate: '',
    duration: '',
    description: ''
  });
  this.setState.push('curso')
  localStorage.setItem('curso', JSON.stringify(this.setState))
    } else {
      this.setState = JSON.parse(localStorage.getItem('curso'))
      this.setState.push('curso')
      localStorage.setItem('curso', JSON.stringify(this.setState))
    }
    this.setState({
      cursos: this.setState = JSON.parse(localStorage.getItem('curso'))
    })
  });


    if (localStorage.getItem('curso')) {
        this.setState({
            name: this.cursoData.name,
            startDate: this.cursoData.startDate,
            endDate: this.cursoData.endDate,
            duration: this.cursoData.duration,
            description: this.cursoData.description
        })
    } else {
        this.setState({
          name: '',
          startDate: '',
          endDate: '',
          duration: '',
          description: ''
        })
    }
}

componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('curso', JSON.stringify(nextState));   
}


  render(){
    // return this.state.map(cursoData =>{
  return (
    <div>
    <Container>
      <Form onSubmit={this.onSubmit}>
        <FormTitle>Cadastro do curso</FormTitle>
        <Section>Dados</Section>
        <Input label='Nome' 
          name="name"
          type="text"
          required
          value={this.state.name} 
          onChange={this.onChangeName}
        />
        <Input label='Data de Inicio' 
          name="startDate" 
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.startDate} 
          onChange={this.onChangeStartDate}
        />
        <Input label='Data de Fim' 
          name="endDate" 
          type="date"
          required
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.endDate} 
          onChange={this.onChangeEndDate}
        />
        <Input label='Duração (Semanas)' 
          name="duration"
          type="text"
          required
          value={this.state.duration} 
          onChange={this.onChangeDuration}
        />
        <Textarea label='Descrição' 
          name="description"
          type="text"
          required
          value={this.state.description} 
          onChange={this.onChangeDescription}
        />
        <ButtonContainer>
        <Button type='submit'>Enviar</Button>
        </ButtonContainer>
      </Form>
        
      {/* <div>
        {this.setState.filter((t, index) => 
            <React.Fragment key={index}>
              <span> {t}</span> ,
            </React.Fragment>
  )}
      </div> */}
      
  </Container>
  </div>
  )

  }
}
