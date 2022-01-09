function Stopwatch(){
    let startTime, endTime, runnig, duration=0;
    this.start= function(){
        if(runnig)
        throw new Error('stop eatch has already started');
        runnig =true;
        startTime = new Date();
    };

    this.stop= function(){
        if(!runnig)
        throw new Error('Stopwatch not started');
        runnig = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    };

    this.reset= function(){

        startTime =null; 
        endTime = null;
        runnig= false;
        duration=0;
    };

    Object.defineProperty(this, 'duration',{ 
        get: function(){
            return duration;
        }
    });

}


const sw = new Stopwatch(); 