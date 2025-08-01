# Media Setup Guide

This guide explains how to set up the background image and video files for the JUT Ranchi website.

## Required Files

### 1. Background Image
**File**: `public/jut.webp`
- **Format**: WebP (recommended) or JPG/PNG
- **Size**: 1920x1080px or higher
- **Content**: JUT Ranchi campus or university building
- **Optimization**: Compress for web use

### 2. Background Video
**Files**: 
- `public/jut-video.mp4` (primary)
- `public/jut-video.webm` (fallback)

**Specifications**:
- **Duration**: 10-30 seconds (loop)
- **Resolution**: 1920x1080px (Full HD)
- **Format**: MP4 (H.264) and WebM
- **Content**: Campus life, students, facilities
- **Size**: Optimize for web (max 10MB for MP4)

## File Placement

Place all media files in the `public/` directory:

```
public/
├── jut.webp              # Background image
├── jut-video.mp4         # Primary video file
└── jut-video.webm        # Fallback video file
```

## Video Creation Tips

### Content Suggestions
- Campus aerial shots
- Students walking around campus
- Modern university buildings
- Library and study areas
- Laboratory facilities
- Sports and recreation areas

### Technical Requirements
- **Frame Rate**: 24-30 fps
- **Codec**: H.264 for MP4, VP9 for WebM
- **Aspect Ratio**: 16:9
- **Quality**: High but optimized for web

## Fallback Behavior

The website includes fallback behavior:
1. **Video plays**: If video files are available
2. **Image shows**: If video fails to load, shows `jut.webp`
3. **Gradient background**: If no media files are available

## Performance Optimization

### Image Optimization
```bash
# Using ImageOptim or similar tools
# Convert to WebP format
# Compress to 80-90% quality
```

### Video Optimization
```bash
# Using FFmpeg
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k jut-video.mp4
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus jut-video.webm
```

## Testing

After adding the files:
1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000`
3. Check that the video plays automatically
4. Test video controls (play/pause, mute/unmute)
5. Verify fallback behavior by temporarily removing video files

## Troubleshooting

### Video Not Playing
- Check file format and codec
- Ensure files are in the correct location
- Verify browser supports the video format
- Check browser console for errors

### Image Not Showing
- Verify file path is correct
- Check file format is supported
- Ensure file permissions are correct

### Performance Issues
- Compress video files further
- Use WebP format for images
- Consider lazy loading for better performance

## Browser Support

- **MP4**: Supported by all modern browsers
- **WebM**: Supported by Chrome, Firefox, Edge
- **WebP**: Supported by all modern browsers
- **Fallback**: JPG/PNG for older browsers 