cvlc v4l2:///dev/video0 --v4l2-width 800 --v4l2-height 600 \
--no-audio \
--sout '#transcode{vcodec=theora,acodec=none,vb=256,fps=12}:standard{access=http,mux=ogg,dst=:8080}'
