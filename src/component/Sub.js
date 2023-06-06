// export const Sub = (a,b) => {
//     console.log("a-b = " , a-b)
// };

// export const Multi = (a,b) => {
//     console.log("a*b = " , a*b)
// };

const Sub = (props) => {

    return (

        <div>

          <p>this is Sub component</p>  

          <p>substraction = {parseInt(props.a) - parseInt( props.b)}</p>
        </div>

    )


};

export default Sub;