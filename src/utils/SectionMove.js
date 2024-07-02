const moveSection = (presentSection, moveAction) => {
    if(parseInt(moveAction)===0){
        return parseInt(presentSection)-1
    }
    return parseInt(presentSection+1)
}

export default moveSection;