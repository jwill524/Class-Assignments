 var slideshow = {
    photoList:['photo1','photo2','photo3'],
    currentPhotoIndex: 0,
    nextPhoto: function(){
        if(this.currentPhotoIndex<this.photoList.length - 1){
            this.currentPhotoIndex++
            console.log(this.photoList[this.currentPhotoIndex])
            
        }else{
            console.log('End of the Slideshow')
            this.pause()
        }
    },
    
    prevPhoto: function(){
        if(this.currentPhotoIndex>0){
           this.currentPhotoIndex-- 
           console.log(this.photoList[this.currentPhotoIndex])
            
        }else{
            console.log('Beginning of the Slideshow')
        }
    },
    CurrentPhoto: function getCurrentPhoto(){
        return this.photoList
    },
    playInterval: null,
    play: function(){
    this.playInterval=setInterval(this.nextPhoto.bind(this),2000)
    },
    pause: function (){
        clearInterval(this.playInterval)
    }
}


slideshow.play()

// slideshow.nextPhoto()
// slideshow.nextPhoto()
// slideshow.CurrentPhoto()
// slideshow.prevPhoto()
// slideshow.prevPhoto()
// slideshow.prevPhoto()
