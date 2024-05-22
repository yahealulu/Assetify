import './Bodycontent.css'
import background from '../../assets/images/Rectangle 82.png'
const Bodycontent = () => {
  return (
  <>
    <img
    loading="lazy"
   src={background}
    className="img-2"
  />
  <div className="Body_content">
    <div className ="div-16">
      أحصل على الإقامة التركية بكل سهولة مع Assetify
    </div>
    <div className="div-17">
       من أي مكان في العالم واحصل على الإقامة التركية
    </div>
    <div className="div-18">
      استمتع بمجموعة من الفوائد عن طريق استثمار الحد الأدنى 200,000
      دولار أمريكي من خلال منصتنا.
    </div>
  </div>
  </>
  )
}

export default Bodycontent