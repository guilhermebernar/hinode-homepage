import CardCategory from "./defaultSections/Card.Category"
import SubTitleCategories from "./defaultSections/SubtitleCategorySection"
import { CardsContainer, SectionCategory } from "./Store.MayBeYourInterest.style"

const MayBeYourInterest = ()=>{

    return(
        <SectionCategory>
          <SubTitleCategories subtitle={"ISSO PODE SER SEU INTERESSE"}/>
          <CardsContainer>
            <CardCategory 
              category={"MAQUIAGENS"} 
              imagem={"/assets/jpg/beautiful-woman-with-red-lips 1.jpg"}
            />
            <CardCategory 
              category={"FRAGÂNCIAS"} 
              imagem={ "/assets/jpg/woman-preparing-wedding-ceremony 1.jpg"}
            />
            <CardCategory 
              category={"ENERGIA & PERFORMACE"}
              imagem={"/assets/jpg/muscular-man-with-protein-drink-shaker 1.jpg"}
            />
            <CardCategory 
              category={"CORPO E BANHO"} 
              imagem={"/assets/jpg/close-up-female-hands-apllying-hand-cream 1.jpg"}
            />
          </CardsContainer> 
        </SectionCategory>
    )
}

export default MayBeYourInterest