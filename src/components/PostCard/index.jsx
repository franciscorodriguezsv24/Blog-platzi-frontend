import StyleCss from "./PostCard.module.css"
import Unkwon from '../../../public/Unknown_person.jpg'

const PostCard = () => {

  return(
    <>
      <div className={StyleCss.container}>
        <div className={StyleCss.postCardContainer}>
          <div className={StyleCss.postImgTextContainer}>
            <div className={StyleCss.containerImg}>
              <img src={Unkwon} className={StyleCss.profileImg}/>
            </div>
            <div className={StyleCss.containerInput}>
              <input type="text" id="description" name="description" placeholder='What are you thinking bro?' className={StyleCss.postInput}/>
            </div>
          </div>
            <button>
              click
            </button>
        </div>
      </div>
    </>
  )
}

export default PostCard