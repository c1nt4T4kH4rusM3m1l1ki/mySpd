/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_PEG:"https://my-spd.vercel.app/api/getpeg",
        URL_PEG:"https://script.google.com/macros/s/AKfycbzgsxA_2Qa2p68VQbYF4PzicDu_1aYka3tX8fNdpQb9R-P3LHIkUc5W5c_s5-SeLARN/exec",
        URL_SPD:"https://script.google.com/macros/s/AKfycbxEDTm6IR3f94CzlGXbl1ZQ7xF3vyniTraSBiQEa_zOxsvlGIhDjAOiqPF4_QErxJvOZA/exec"
    }
};

export default nextConfig;
