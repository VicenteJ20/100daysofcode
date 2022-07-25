import './App.css';
import StandardInput from './components/StandardInput';


export default function App(){
  return (
    <div className='p-4'>
      <header className='headerTitle'>
        <h1 className='titleTop'>Inputs</h1>
      </header>
      <div className='container-fluid container_inputs mt-4 row gap-4'>
        <StandardInput message="<Input />" label="Label" color="#828282" displayText="none"></StandardInput>
        <StandardInput message="&:hover" label="Label" color="#000" displayText="none"></StandardInput>
        <StandardInput message="&:focus" label="Label" color="#2962FF" displayText="none"></StandardInput>
        <StandardInput message="<Input error />" label="Label" color="#D32F2F" displayText="none"></StandardInput>
        <StandardInput message="&:hover" label="Label" color="#333333" displayText="none"></StandardInput>
        <StandardInput message="%:focus" label="Label" color="#D32F2F" displayText="none"></StandardInput>
        <StandardInput message="<Input disabled />" label="Label" color="#828282" border="none" backgroundColor="#F2F2F2" displayText="none"></StandardInput>
        <div className='col-md-8'></div>
        <StandardInput message='<Input helperText="Some interesting text" />' label="Label" color="#828282" displayText="inline" textContent="Some interesting text"></StandardInput>
        <StandardInput message='<Input helperText="Some interesting text" error />' label="Label" color="#D32F2F" displayText="inline" textContent="Some interesting text" colorLabel="#D32F2F"></StandardInput>
        <div className='col-md-4'></div>
        <StandardInput message="<Input startIcon />" label="Label" color="#828282" displayText="Placeholder" paddingPlaceHolder="0.8rem 0 0.8rem 3rem" myIcon="fa-solid fa-phone" pdTop="1.3rem" pdLeft="1rem" pdRigth="0"></StandardInput>
        <StandardInput message="<Input endIcon />" label="Label" color="#828282" displayText="Placeholder" paddingPlaceHolder="0.8rem 1rem 0.8rem 1rem" myIcon="fa-solid fa-lock" pdTop="1.3rem" pdLeft="90%" pdRigth="0"></StandardInput>
        <div className='col-md-4'></div>
        <StandardInput message='<Input value="text"/>' value="Text" label="Label" color="#828282" displayText="none"></StandardInput>
        <div className='col-md-8'></div>
        <StandardInput message='<Input size="sm" />' label="Label" color="#828282" displayText="none" paddingPlaceHolder="0.5rem 0.7rem 0.5rem 0.5rem"></StandardInput>
        <StandardInput message='<Input size="md" />' label="Label" color="#828282" displayText="none" paddingPlaceHolder="0.8rem 0.8rem 0.8rem 0.8rem"></StandardInput>
        <div className='col-sm-12 col-md-5'></div>
        <StandardInput message='<Input fullWidth />' value="Text" label="Label" color="#828282" displayText="none" paddingPlaceHolder="0.8rem 0.8rem 0.8rem 0.8rem" myWidth="100%"></StandardInput>
        <StandardInput message='<Input multiline row="4" />' label="Label" color="#828282" displayText="none" paddingPlaceHolder="0.8rem 0.8rem 10rem 0.8rem"></StandardInput>
      </div>
      <div className='footer_div'>
        <footer className='footer'>CREATED BY <a href="https://devchallenges.io/portfolio/VicenteJ20" target="_blank" rel="noreferrer">VicenteJ20</a> - <a target="_blank" href="https://devchallenges.io/" rel="noreferrer">devchallenges.io</a></footer>
      </div>
    </div>
  );
}