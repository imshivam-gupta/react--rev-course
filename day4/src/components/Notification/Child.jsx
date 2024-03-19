export default function ChildComp({toast}){

    const notify = () => toast("Wow so easy!");

    return(
        <div>
            <h1> Im child component</h1>
            <button onClick={notify}>Notify!</button>
        </div>
    )
}