var store=new Vuex.Store({
    state:{
        arr:[
            {content:'HTML',onoff:false},
            {content:'CSS',onoff:false},
            {content:'JavaScript',onoff:false},
            {content:'jQuery',onoff:false}
        ],
        arr1:[
            {content:"",onoff:false}
        ],
        arr3:[],
        arr2:{onoff:false},


    },
    mutations:{
        add(state,data){
            state.arr.push(data);
            state.arr1={
                content:'',
                onoff:false
            }
        },
        del(state){
            for (var i=0;i<state.arr.length;i++){
                if (!state.arr[i].onoff) {
                    state.arr3.push(state.arr[i])
                }
            };
            state.arr=state.arr3;
            state.arr3=[];
            state.arr2={
                onoff:false
            }
        },
        quan(state) {
            if (state.arr2.onoff){
                for(var i=0;i<state.arr.length;i++){
                    state.arr[i].onoff=true
                }
            }else {
                for(var i=0;i<state.arr.length;i++){
                    state.arr[i].onoff=false
                }
            }
        },

    }

})