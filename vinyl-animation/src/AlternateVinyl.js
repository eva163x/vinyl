import React, {useState} from 'react'

const AlternateVinyl = () => {

    const[isPlaying, setIsPlaying] = useState(false);
    const[wasPlaying, setWasPlaying] = useState(false);

    const handleClick = () => {
        setWasPlaying(isPlaying);
        setIsPlaying(!isPlaying);
    }

    function animationState(isPlaying, wasPlaying){
        if (isPlaying == wasPlaying){
            return '-stationary';
        }
        else if(isPlaying){
            return '-playing';
        }
        else{
            return '-paused';
        }

    }

  return (
    <div>
    <div className='vinyl-container'>
        <div className='vinyl-turntable'>
            <img className={`vinyl-record${animationState(isPlaying, wasPlaying)}`} src='/plain-vinyl-square.png' alt='vinyl record' />
            <img className={`vinyl-stylus${animationState(isPlaying, wasPlaying)}`} src='/vinyl-stylus-side.png' alt='vinyl stylus' onClick={handleClick} />
        </div>
    </div>
</div>
  )
}

export default AlternateVinyl
