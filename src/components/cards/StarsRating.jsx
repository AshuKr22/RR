export const  StarsRating=({stars})=>
{
    const emojiRating = (stars) => {
        
        let rvalue = Math.floor(stars || 0); // generate as many star emojis as whole number ratings
        let output = [];
        for (var i = 0; i < rvalue; i++) output.push('⭐');
        return output.length ? output.join('') : 'N/A';
    };
    return(
   <span className='stars'> {emojiRating(stars)}</span>)
    
}