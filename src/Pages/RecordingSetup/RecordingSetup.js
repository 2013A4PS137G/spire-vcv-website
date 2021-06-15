import React from 'react'
import GalleryIllustration from '../../Components/GalleryIllustration/GalleryIllustration'
import './RecordingSetup.css'

const RecordingSetup = () => {
    return (
        <div>
            <div className="text-container">
                <div id="section1" className="row align-items-center">
                    <div className="column align-items-center">
                        <h2 className="mar title cool-font title-anim">Recording &amp; Processing</h2>
                        <div className="gallery anim-fade-in">
                            <GalleryIllustration/>
                        </div>
                        <div className="para anim-fade-in"> 
                            <ul>
                            <li>
                            Articulatory movements were recorded using a 3D Electromagnetic Articulograph <a className="link-style" href="https://www.articulograph.de/" target="_blank" rel="noreferrer">(EMA) AG501</a>.</li> 
                            <li>A t.bone EM9600 shotgun unidirectional electret condenser microphone was placed near the subject to record the audio data synchronously with the articulatory data. 
                            </li>  

                            <li> <b>Audio:</b> originally recorded at 48 kHz then downsampled to 16 kHz. </li>
                            <li>
                                <b>Articulatory data:</b>
                                <ul>
                                    <li>Sampled at 250 Hz.</li>
                                    <li>A 10th-order lowpass Chebyshev Type II filter with 40Hz cut-off frequency and 40 dB of stopband attenuation was used 
                                        to low-pass filter the articulatory movement recording to remove the high-frequency noise resulting from EMA measurement error.</li>
                                    <li>
                                        <b>Sensor placement:</b>
                                        <ul>
                                            <li>
                                            6 sensors were placed on the different speech articulators namely:
                                                <ul>
                                                    <li>Upper Lip</li>
                                                    <li>Lower Lip</li>
                                                    <li>Jaw </li>
                                                    <li>Tongue Tip </li>
                                                    <li>Tongue Body </li>
                                                    <li>Tongue Dorsum </li>
                                                </ul>
                                            </li>
                                            <li>
                                            Sensors were also placed behind the left and right ear for the purpose of head movement correction.
                                            </li>
                                            <li>
                                            Each of these 6 sensors captures the movements of the articulators in 3D space, resulting in eighteen articulatory features
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li> <b>Instructions to speaker:</b>
                                <ul>
                                    <li>
                                        All speakers were college going students fluent with reading, writing and speaking English coming from different regions of India 
                                        with different native language backgrounds. 
                                    </li>

                                    <li>Speakers were given prior training to increase speaking rate gradually during the main recording.</li>
                                    <li>A GUI produces the stimuli to be uttered on screen and the user pronounces it for each of the three different speaking rates, namely slow, normal/habitual, and fast 
                                        and three repetitions each.</li>
                                </ul>
                            </li>

                            <li id="annotation">
                                <b>V-C-V Boundary annotation:</b>
                                <ul>
                                    <li>The VCV boundaries were manually annotated by a team of four members.</li>
                                    <li>These boundaries were marked using an in-house built MATLAB annotation tool by observing the wideband spectrogram, the raw waveform and glottal pulses obtained using 
                                    <a className="link-style" href="http://www.fon.hum.uva.nl/praat/" target="_blank" rel="noreferrer"> praat</a></li>
                                    <ul>
                                        <li><b>For unvoiced consonants:</b> the last glottal pulse in the V<sub>1</sub> region was considered for marking the onset of the C region, and the 
                                        first glottal pulse at the start of V<sub>2</sub> region was for considered marking the end of C-region, in tandem with the spectrogram.</li>
                                        <li><b>For voiced consonants:</b> the spectrogram with the formants and time domain waveform were considered for marking the consonant start and end boundaries.  </li>
                                    </ul>
                                    <li>A unanimous call was then taken for the boundary marking after an internal discussion among the annotators.</li>
                                </ul>
                            </li>
                            </ul>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecordingSetup
