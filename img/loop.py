import numpy as np
import math
import imageio

width, height = 2560, 1440
fps = 30
duration = 8
frames = fps * duration

np.random.seed(3)

# PARTICLES (small and subtle)
num_particles = 220
px = np.random.rand(num_particles) * width
py = np.random.rand(num_particles) * height
vx = np.random.uniform(-15,15,num_particles)
vy = np.random.uniform(-60,-20,num_particles)
psize = np.random.uniform(0.4,1.2,num_particles)

# LASERS
num_lasers = 6
laser_angle = np.random.uniform(-0.25,0.25,num_lasers)
laser_phase = np.random.rand(num_lasers)*2*np.pi

# SYMBOLS
num_symbols = 14
sx = np.random.rand(num_symbols)*width
sy = np.random.rand(num_symbols)*height
sphase = np.random.rand(num_symbols)*2*np.pi


def glow(img,x,y,r):

    x0=int(max(0,x-r))
    x1=int(min(width,x+r))
    y0=int(max(0,y-r))
    y1=int(min(height,y+r))

    if x1<=x0 or y1<=y0:
        return

    yy,xx=np.mgrid[y0:y1,x0:x1]
    d=np.sqrt((xx-x)**2+(yy-y)**2)

    glow=np.clip(1-d/r,0,1)

    img[y0:y1,x0:x1,1]+=glow*200
    img[y0:y1,x0:x1,2]+=glow*120


def laser(img,angle,phase,t):

    brightness=(math.sin(t*2+phase)+1)/2

    if brightness < 0.7:
        return

    for y in range(0,height,2):

        x=int(width/2 + (y-height/2)*math.tan(angle))

        if 0<=x<width:
            img[y,x,1]=255
            img[y,x,2]=140


def symbol(img,x,y,size):

    for i in range(6):
        ang=i*(2*np.pi/6)
        dx=math.cos(ang)*size
        dy=math.sin(ang)*size
        glow(img,x+dx,y+dy,size*0.8)


writer=imageio.get_writer("emerald_bg_loop.mp4",fps=fps)

for f in range(frames):

    t=f/fps
    frame=np.zeros((height,width,3),dtype=np.float32)

    # particles
    for i in range(num_particles):

        x=(px[i]+vx[i]*t)%width
        y=(py[i]+vy[i]*t)%height

        glow(frame,x,y,psize[i]*3)

    # lasers
    for i in range(num_lasers):
        laser(frame,laser_angle[i],laser_phase[i],t)

    # glitch symbols
    for i in range(num_symbols):

        if math.sin(t*10+sphase[i])>0.92:
            symbol(frame,sx[i],sy[i],4)

    frame=np.clip(frame,0,255).astype(np.uint8)
    writer.append_data(frame)

writer.close()