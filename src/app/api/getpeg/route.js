import { NextResponse } from "next/server";

export async function GET(request){

    const res = await fetch('https://script.google.com/macros/s/AKfycbzgsxA_2Qa2p68VQbYF4PzicDu_1aYka3tX8fNdpQb9R-P3LHIkUc5W5c_s5-SeLARN/exec')

    const data= await res.json()
    return NextResponse.json({status:200, pesan:"succest", data:data})
}