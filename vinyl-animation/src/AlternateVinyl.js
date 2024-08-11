import React, {useState} from 'react'

const AlternateVinyl = () => {

    const[isPlaying, setIsPlaying] = useState(true);

    const handeClick = () => {
        setIsPlaying(!isPlaying);
    }

  return (
    <div>
    <div className='vinyl-container'>
        <div className='vinyl-turntable'>
            <img className={`vinyl-record${isPlaying ? '-paused' : ''}`} src='/plain-vinyl-square.png' alt='vinyl record' />
            <img className={`vinyl-stylus${isPlaying ? '' : '-playing'}`} src='/vinyl-stylus-side.png' alt='vinyl stylus' onClick={handeClick} />
        </div>
    </div>
</div>
  )
}

export default AlternateVinyl
