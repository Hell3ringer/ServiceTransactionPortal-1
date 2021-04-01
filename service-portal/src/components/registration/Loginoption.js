import React from 'react'
import { Route} from 'react-router-dom'
import '../stylesheets/Loginoption.css';




const Loginoption = () => {    

    return (
        <div>
            <div className="container-opt" >
            < h1 style={{color:'gray'}}> Login as</h1 >            
            
            <div className='button'>
                <Route render={({ history }) => (
                    <button className='btn1' onClick={() => { history.push('/loginProfessional') }}>
                        PROFESSIONAL
                    </button>
                )} />
                <Route render={({ history }) => (
                    <button className='btn2' onClick={() => { history.push('/loginCustomer') }}>
                        CUSTOMER
                    </button>
                )} />
            </div>
            
            </div>
            
        </div>

)

}

export default Loginoption