import Noise from '@/components/Noise'
const NoiseTexture = () => {
  return (
    <div className='h-full!' style={{width: '100vw', position: 'absolute', overflow: 'hidden', "zIndex": '2',}}>
  <Noise
    patternSize={500}
    patternScaleX={2}
    patternScaleY={2}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
</div>
  )
}

export default NoiseTexture
