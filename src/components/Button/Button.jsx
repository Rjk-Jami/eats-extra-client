import { Button } from "react-bootstrap";

const LoginButton = ({children})=>{
    const gradient = {
        background: 'linear-gradient(to right, #0398dc, #764ba2)',
        border: 0,
        borderRadius: '5px',
        padding: '10px 20px',
        color: '#fff',
      };
    return<>
        <Button className="fw-semibold" style={gradient}>
      {children}
    </Button>
    </>
}
const SignUpButton = ({children})=>{
    const gradient = {
        background: 'linear-gradient(to right, #f44336, #ff69b4)',
        border: 0,
        borderRadius: '5px',
        padding: '10px 20px',
        color: '#fff',
      };
    return<>
        <Button className="fw-semibold" style={gradient}>
      {children}
    </Button>
    </>
}

export {LoginButton, SignUpButton};