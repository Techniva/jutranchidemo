'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export default function VideoBackground() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVideoPlaying])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  const togglePlayPause = () => {
    setIsVideoPlaying(!isVideoPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="/jut.webp"
      >
        <source src="/jut-video.mp4" type="video/mp4" />
        <source src="/jut-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-lg p-4">
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-yellow-400 transition-colors"
            title={isVideoPlaying ? 'Pause' : 'Play'}
          >
            {isVideoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button
            onClick={toggleMute}
            className="text-white hover:text-yellow-400 transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  )
} 