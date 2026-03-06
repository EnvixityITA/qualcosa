function getBiomeColor(x,z,height){

let biomeNoise = Math.sin(x*0.01)*Math.cos(z*0.01);

if(height < -2) return 0x3366ff; // acqua

if(biomeNoise > 0.4) return 0x228B22; // foresta

if(biomeNoise < -0.3) return 0xEDC9AF; // deserto

return 0x88cc44; // pianura

}
