import TiposDePlantas from "./TiposDePlantas";
  
  const ItemListContainer = ({ greeting }) => {
    return (
      <>
        <h1>{greeting}</h1>
        <TiposDePlantas />
      </>
    );
  };
  
  export default ItemListContainer;
  