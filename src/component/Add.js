// const Add = (a,b) => {
//     console.log("a+b = " , a+b)
// };

// export default Add;

const Add = (props) => {

    return (

        <div>

          <p>this is add component</p>  

          <p>addition = {parseInt(props.a) + parseInt( props.b)}</p>
        </div>

    )


};

export default Add;