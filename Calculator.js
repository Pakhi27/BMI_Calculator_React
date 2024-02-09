import React ,{ useState } from 'react'

const Calculator=()=>{
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [bmi,setbmi]=useState(null);

    const calculateBMI=()=>{
        const weightinkg=parseFloat(weight);
        const heightinm=parseFloat(height)/100;
        const bmi=weightinkg/(heightinm*heightinm);
        setbmi(bmi.toFixed(2));
    }
    const clearInputs=()=>{
        setWeight('');
        setHeight('');
        setbmi(null);
    }
    return(
      <div className="container">
         <h1>BMI CALCULATOR</h1>
         <div className="container1">
            <h1>Weight</h1>
            <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)}></input>
         </div>
         <div className="container2">
            <h1>Height</h1>
            <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)}></input>
         </div>
        <div className="submit-container">
            <button type="submit" onClick={calculateBMI}>Submit</button>
        </div>
        <div className="reload-container">
            <button type="reload" onClick={clearInputs}>Reload</button>
        </div>
        <div className="result">
            Your BMI is:  {bmi}
            {bmi!=null &&(
                <>
                {bmi<18.5?(
                    <p>You are underweight.</p>
                ):bmi>=18.5&&bmi<=24.9?(
                    <p>Your weight is normal.</p>
                ):bmi>=25&&bmi<=29.9?(
                    <p>You are overweight.</p>
                ):(
                    <p>You are obese.</p>
                )}
                </>
            )}
        </div>
       </div>
    );
}
export default Calculator