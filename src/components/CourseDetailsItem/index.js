import './index.css'

const CourseDetailsItem = props => {
  const {courseItemDetails} = props
  const {name, description, imageUrl} = courseItemDetails

  return (
    <li className="courseDetailsCard">
      <div className="courseDetailsContainer">
        <img src={imageUrl} alt={name} className="courseDetailsImage" />
        <div className="courseInfoContainer">
          <h1 className="courseDetailsTitle">{name}</h1>
          <p className="courseDetailsInfo">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default CourseDetailsItem
