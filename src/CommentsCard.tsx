export default function CommentsCard({comment}){
    return (
        <div className="user">
            <h3>ID: {comment.id}</h3>
            <p>Name: {comment.name}</p>
            <p>Email: {comment.email}</p>
        </div>
    )
}