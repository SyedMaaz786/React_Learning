function handleFormSubmit(){
    event.preventDefault();   {/* This line is very important to print the the form is submitted text because this prevents your form from being refreshed.*/}
    console.log("Form is submitted!");
}
export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>          {/* Here onSubmit is the event listener */}
            <input placeholder="Write something!"/>
            <button>Submit</button>      {/* Form in react */}
        </form>
    )
}