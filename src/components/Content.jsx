import Card from "./Card";

function Content (){
    return(
        <main>
            <h1>Fast-Food House</h1>
            <div className="cardContainer">
                <Card img="https://i0.statig.com.br/bancodeimagens/2m/x8/6n/2mx86nv7kxv8cybegti6zvw0t.jpg" title="Feijoada" desc="Prato Principal" />
                <Card img="https://assets.unileversolutions.com/recipes-v2/230447.jpg" title="Hamburguer" desc="Lanche" />
                <Card img="https://receitinhas.com.br/wp-content/uploads/2022/08/Coxinha-de-charque.jpg" title="Coxinha" desc="Salgado" />
                <Card img="https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400" title="Pudim" desc="Sobremesa" />
                <Card img="https://i.ytimg.com/vi/B96fZuoL57E/maxresdefault.jpg" title="Pizza" desc="Massa" />
                
            </div>
        </main>
    )
}
export default Content