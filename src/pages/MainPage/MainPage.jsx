import PreviewCategories from "../../components/MainPage/PreviewCategories/PreviewCategories";
import Hero from "components/MainPage/Hero/Hero";
import SharedContainer from "components/common/SharedContainer/SharedContainer";

export default function MainPage() {
    return (<SharedContainer>
      <Hero/>  
      <PreviewCategories/>
    </SharedContainer>)
}
