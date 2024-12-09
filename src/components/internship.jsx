import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Style/internship.css'; // CSS for styling

const Internship = () => {
    return (
        <div className="internship">
            <header className="product-header">
                <div className="header-content">
                    {/* Add content here if needed */}
                </div>
            </header>

            <section className="internship-list">
                <h2>INTERNSHIPS WE OFFER</h2>
                <div className="internship-cards">
                    {/* Data Science Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/Data-Science.jpg" 
                            alt="Data Science" 
                            width={250} 
                            height={200}
                            className="internship-image"
                        />
                        <h3 className="internship-title">Data Science</h3>
                        <p className="internship-description">
                            The Data Science Internship offers practical experience in data analysis, machine learning, and using tools like Python to gain insights from data.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Web Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/web_ilY3NoA.jpeg" 
                            alt="Web Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Web Development</h3>
                        <p className="internship-description">
                            The Web Development Internship offers practical experience in building websites using front-end and back-end technologies.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Cyber Security Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.commtech.com/wp-content/uploads/2024/06/Depositphotos_174652098_XL-900x600.jpg" 
                            alt="Cyber Security" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Cyber Security</h3>
                        <p className="internship-description">
                            The Cyber Security Internship offers practical experience in protecting digital assets and networks from threats, preparing interns for a career in cyber security.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Data Analytics Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP._9VpHNE8qRmtV4W9HOw_xwHaE8?rs=1&pid=ImgDetMain" 
                            alt="Data Analytics" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Data Analytics</h3>
                        <p className="internship-description">
                            The Data Analytics Internship focuses on statistical analysis, data visualization, and deriving actionable insights from datasets.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* AI & Machine Learning Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.EZeP9vSGOADD1MSdiDctcgHaE7?rs=1&pid=ImgDetMain" 
                            alt="AI & Machine Learning" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">AI & Machine Learning</h3>
                        <p className="internship-description">
                            The AI & Machine Learning Internship covers building intelligent models using algorithms, neural networks, and predictive analytics.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Cloud Computing Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.beekNXRA04cwREBq7hGyLAHaDy?rs=1&pid=ImgDetMain" 
                            alt="Cloud Computing" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Cloud Computing</h3>
                        <p className="internship-description">
                            The Cloud Computing Internship provides exposure to cloud platforms like AWS, Azure, and GCP for scalable and efficient computing solutions.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Blockchain Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADqAdADASIAAhEBAxEB/8QAGwABAQACAwEAAAAAAAAAAAAAAAECAwQFBgf/xABNEAABAwIEAwUEBgYIAwYHAAABAAIDBBEFEiExBhNBIlFhcYEUMpGhByNScrHBFTNCY9HwJGJzgpKisuEWQ1MlNDZEZHQ1dYOTs8Lx/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC8RAAICAQQBAgQEBwEAAAAAAAABAhEDBBIhMUETIgUUUXEyYZGhI0KBscHh8fD/2gAMAwEAAhEDEQA/APApqiL6UsIiIFQREQFBERA0gmqInYwiIjkYRETAIiJUKgiIkyKCXVsqRa2xuGnQ3tdNCaFjbNcb2tftbXvbuRQKqyCtDnOa0AkuIaAASSSbbBHDKXNuTYkX1BJ2Pw2UT+f5CvwJj8RomvRc980LsKoqcDNNHWTyXYzlwAyNaHNlkdu86HwBWqspTRzckvEv1cMjZWNcGSCSNsl2Ztxra/h8A5seZSltfHL/AG/6cazgGk7OuW6g7aFFbNFspvcAnS1j3JZNmiVoiqlkTRJURFQgFSoiLE0AqoitMhluUuoFVRDLdFEQKi3S6iqdkNBERWmZst1NURVYqF0RRQ2WkZKIiExNFRRFdk0EuiihlJFREQmU0FVEVpmbRpREXl0fQhERABERFAEREAERE6HQREQFBERABLIqECFkVTzSERLLLK/Lnt2QQ0u6ZiCbKetkUIeZAGxJvp8FcvaLRZ2pAtezvJcmhkihqo5ZcmRgfq9pe5pc0tuxo0za6LWyneYZp2vaGQuja0PcBI4ONrho16arSMXRyvKlJqXHXP38CACSopWzN5jObG18b5eXmaDqx0jtAO/w81vqKeKapxWSjkhdSU5lqGPbdrXRl12RwsPavY6eXiuPC0mWEuja9vMa5wlzcsgHNeQjWy7BjKgzYpJSFrQYpXNc9gbK6Mu7TI27gfaK0jBtHNnlKGTcn0v6dmqSZjsKoacxuPKq53xyyBrKZl2tD4i0Xzfslx8bdVsrIKyorJM1Q+YNo2VQnnHLYYhFzMsUd7AX0aANh4LJtJWS0VLGAwNbUfVySytBYZXZAGxt2ZcauKssdZTVj7vtIKZ0jJqhrXSOzszOytBtc6gdwPitPT8nEntftav3HVdL9/4eqKa9d+vf6gKrFnr8+QiD+dvzXPnwyanwzCsTdNGY8RfUMZE1rs8XJNu046G6V0ZzlGNX5NFFFDPXYdDMHGGWrgjlDXFpLHPAcAW6rdi8FNS4pidPTNLaeGoLYWOJJa0AaXOq0UTgKyhcD7tVAT6PC24q/PiWIP8AtTk/IK9t+45JeotRSftr/KOGiIhHSERE7E0ERFaIaAVKiKiC9EUVugVFRTqqmmQ0ETRRUJIaqqIpLSCqKIBoqIiaZk0ERRDLiPBVREimioiJpmbRpRFVw0fQ0RERFBQRVRFBQRFUUOiIiJhQREQOgiIgVBUKLJqS7E1yFV32DUOHVOEcY1NVAJKmipIH0Dy4gxPcXl5aA63cNl0YF/l06akH8URe50ZKSbaXgoZfU7dVyfZ4vZYHi/OdI4ODnNzSCwsWMGwBuFrDbeS5OWLkQ+7zDI8kXJdI09XOG3dZdUIJ+CMkX7TKniZS1QEjQXNaQWtbzXHOz3W9L9/hdWJrhTVXKLQ0vjD2NaDI9hJI5j+4dFva6UVjS4BzmsDAyEDKWZB2A49O8/xWDGP5FQA5zckjM8bbWsSW3keN7W0W8YJHFKG73PzX9yNjdDNEJMgN45LPGdrQdRmaFyiyYT1+Rz2OlhMwZ2ec5r+3lcW3ItftDxC1kubPTiSwyxNawQAFzMzSBZx0JH87Lcxj3vnMgla20cbgHWswRl2aRw3A007ytIxM8qcnu/IxAkkggAEcbb07HHMc7mBxaxxadAAtvLBlcxn1cjoJc+plle4FxGpvYkAZte5ahzHR0mfI1hextwLuIjtlMhPyC5Qc50s+Ulgka1lU2kysbJmkLgLjs2ba5stKMHir9zopKM7xGx6sd+AK4jmuaS1wyu6gjVd3lGoGuptr06G6j4Y5RaQXA2NrEeRWU9MpcxPRXCOksu3rpM3D3DsdyeU+qPle64k1FJHdzDnYLk/aaFnUuzYbhbLjsumNutjfVcyxSje5dHNmxrJKD+jv9mdli7aWOHgswxRxuGHR84xsa0vcHMN35et7roqt2epqHfaff5BdjicueLh0Xvy6NrfL3F1UpvK897iVnWyG0z0sJRgtzt8/3MQqoik6WVERNCCIidiaCIitMhoIiKiC3RQKoFQS6IUgoFQIiCqKr4rEKpiaCqKIIoqhVUKBpECqiBBRUREIlmpERcp9AEREDCIqgCIqiACiIgChN1FW+837zT80AV7HscWPaWkW0cNQDqsVyas8yqeTsQ0fILjnQuA6aIEjfRUxra7D6ISCP2yphp+YW5gwPNi7LcX8rrZiVI3DMQxGhdOJPZJ3w87LkEgbs7Lc28rqYa/l4jhj/sVcLvgV6DCJY38dQzTNbIw1tY4h7Q4XMD9bFTJSS3oxm5KV+KOBhkpZhvEbOk1NC3ztmXWMb16bBdlI5rZOJA0ANfVTgACwA5zzYALrW3G2+gXTtSSYopdryb2Xa5rha7SHC4BFwbjQ6LeAwwxghubmuc7skh2YAnmE7HwWhjgd9D3rmtAMbGNDsrjG1129hrrnTXqV0Y0Eo8GQziZzXDm3ZGAb5GgDK4eg0Cz5bjHK6QuJL5T71mB4I0I2ObX4LJrZC8ANc8vjzESA9nKdCSO62gW1lLM6MuMROcuALjazrjQB3xW3CMXBmqzxJDn7QDA1oYLABwIszxC3GJnMnu4SRxObFcFzBka3LmIPaNrAa9VyPYakviJPaFxZzgD2SdrA6Lkx4UJJJBPPHHmA+saCY48xHaF9dPJJziuxPG7s6vITC0XtYsfktlDs+gcTv5raGRl7yLZLRhzW3Y2x39F2zcKpmtj5kkzw1zCBo1hYT0sL+K1T4dKHFzQZY2xus4gtcAb2JB1I6Ko5Y9GLxs6cNGw21tbu6FZZbLZk7xt1t19UDb+WpJ7gNyulNFV4OBXyZIREPemOvgxuv4rgyuPs9IL6NLiB3XVqZefK+QCzfdYO5o0+e6wd+rjHddeblybpSBx4M6x+ZuGj7FO0fGxXDce07xK3VBuYvCMD8Fp71z5HchKNEVURZg0VVYqk2+IAAFySTYACyZBUW/2HFdP+zcS12/oVV8jkWqSKpgLW1FPUQud7oqIZYc3kJGgpqSYGKLbT09ZVyOipKaoqJGMMr2U8T5HMjGhc7J0Ws/7G+4PcQqTJaIiIrTIaCBFDYanYbqrJoyQrbJTVsLKeWopqiGOpZnp3TxPjbMz7UZcNQtRU2n0NIiIiB0EC2spqySCWrjp6h9JC8RzVDYnmCN5IAa+T3QdQPVavw3CaafQmVVYhVMkIUJABJNgN1k+OaIhssUsTiA4NmjfG4tOocGyAG3cldDSMEREDoBZBYoE0Sa1U6IuY98iKoEAETqiAGqIiAIqor0QAQbt8x+KKDceYQBumN5SfJaj7zlm83eT5LA7lNgbaY5amld9mVrvgbrssPly8QU83/qJT/ijIXVRG0kZ7nBcmB5Fc2TukeVrCnGvzE1ZyXuOfEzf35pXf53FcYNut7vfqT9qR5/zEqMYSQt2hbTKOIWBcPFc6G7RE1jdCWtN26Xaf2SsGRnpuNvNczkgNiDXh4LWucQ1zSxzt47O3t3+K0gq4BwZzYOU7JI2RrZsxDopMznt6Z77G65bIBZ4Ns5eAHE6kX1sF17IbP00FhcjUi/d4rnwue1r2SSyBuV4+ra0vL/2bl3S9rqZpo0UTmthdnabEvIcH8w5tALX+C3BsEbnOkkgHuntkC7C02yArrckxc28j3XAvmcTrbW4WZjb2LMY0taAXMabyXu67ySdRe3kFk4t+QcX9DmGfD2Mi5s2a2R1m5ntyEkloAFvmsXYlRsdfJM9zAMnNY1twXEusCT4AaLhugYBFlEmYN+sz2tmvcZLdFOWCTuCB2e/e56FCxpmE4M0VU8FRctpRE87PLiSRvZzWj8101dPilss3KETY2wNfDG0ARjoSP58V3oiiAlL2PL8tochAa11wTnBF7WvZaDHodPMHZdCSapGMkeULe7ZYkaNXd1mH04ZLOwiLI0uc06sPkunI6W2v5hYThtMqOLIbu8tFgm+qLib5AIiJiaC7nhYA8TcMggEe3g2O1xFIQfiumXc8K/8Aibhn/wCYD/8AFIs8zrHIk95xrxfjGAYpR0dFJRNikoI6lwqYw92d0sjNy8aWA6Ll4HiX/GHDmMOxump2QRunh58bHCFzY4myGdgfezmEnr0WHF3E9NgeI01LJglHXvloo6gTVD2B7LySMyAGJxsLX3/a+MwzE8O46w3FMIMFThj6dkBe2jn+qLJMwYW5A27bg5mlv+3j1/CT21+ZflnS/RZY1vEBsLmloNTvbmSnTw/gvFzU9VVYrV0lJBJPUzV1W2KKFuZ7rSuue7Tc+S919G9PJS4vxbSSlpkpRT00hbo0uinnjc4Dxt6Ld9H1NTHEeMq1zA6oirDSx7FzYS+WUgde0R/lXY83p5MmSP0RNWjzn/APGgh53slJmsXckVbTLfu93JfyeV5qohnpJZoKqJ8M0BLJo5RZ7SOhC7aPifiMYtHiZr6ozPq4y+HmSch0bpQDByicgbbS1vHovf8AFOGUFRxXwG+VjT7XPUsqQRpK2jaJ4w4dddFss+TE1HL002Tti+jxNBwVxfiMDKiKiihhka18ZrphDI9p1B5Ya53lcBdVjOCYzg14sSpHRcxjxFI1zZIZco2ZIzr4Feu+kHFsXZjUdBFVVFPSwUtPM1tPLJFzJJMxMpLCLkWsNdLeK6jE+IeIcV4WFLWULpqSGoAfiz2PIdJFmDYy+2XNrYm/Q96rHmzS2yaVMhxSPS/SMWNwXhcu0aJDc72HszdF4qq4ex6hw2mxaspmw0lRIyONr5BzwXguaZI+lwNNT6L7FWUuByQcPVmLvhaygfTGj9oeBEaudjIo7h2hd9nu36afPPpKdjjcRY2pkP6NMDpMNbG0tja4NtJmuTeQHc9xFt1y6XO+MS65v/RbiuzoMJ4c4hxxrn4bRh0DHOY6oqJBDBmboWscQSbeAXIxThPifB4XVFXRtdTsH1k1JKJ2R7avFmvHdt1XtuLampwLhfAKHCnvpoZjDTPlpy5r+W2HPla5hDu2dTbXfv18tgXE3E8VLiuHQU1Ri8MlJK4tl5s7qKN7Sxzy4XJYRfsk7jTqtY5ss16iqvow2x6PRcPxvl+jrFooo3SyS/pZkbGML3yPdMQ0Nb37W+PReZfwLxnHTGpfQwmzQ8wR1LHVIFr+7bLfwDyvV8KVU1DwBiNVAbTU4xiSJ24EgeQ0+h+K676OsTxSpxnE4KqtqaiOWgdVPFRLJJ9cyZjQ9ucmx7RWayZYPJkhXDBpOkzw1LR1tdUx0dHTSzVUpcGQsb2uz7xdewAHUl3+/pR9H3GmTOaehBsSYzWdv/Fky/5lzcPj4iZxpxQzh+GjE3tFayokrmk09PC+bNmsztk3sWgeI2C5dHheEUGOUdTivGT6rGDXRNFPh7Xuz1D35RFK+8hy3NiLNsNFtk1U+4vxfV/8IjBeTw81JiWG4hFTT0r2V8FVTZIJQDmlztdGNDYtcba3Oh+HoeN5OJKivwtuL0VHTzGmbHSsoZDM2UySAOBkkAN7m1vxvc9tx21g4q4WcAA57MPznvy1xAHpqs/pG/8AjXCf3mW8/a40lm9SWOVc0ylFK0eadwXxeK2KgbQRvmfA2pMrJh7LGwkss+Vw94EHQArj4vwzj+Bsjlr6dghkcGNnp5ObEJCCcjtA4Huu0L3H0k4niFKzB6OlqZoIqn2qWoNPI6N8nLcxrGlzSDbUnfosfaKjEPoymmrJHTTNp3NMkhLnu5FaGMLi65vYAKFqc1RyOqfAbI8o+YIN0/n1QL2Ec1UYBUqIsD6CggREBRSoiICglkRAUECIgKKVERAUU7qIiAordHN8wtjHWlzeJ/BahutjdHBNOgo5rBcE9+q5MLQR4/ktNOM0cZ7xb4LlsZtovQjG1ZSicmOP8t1zo4SQ3oNPM+a49OH3tlLh4bruaamfIGkAWuL7XHonOSijohjs1xQm+wAsAcvcTZcqOn0trvY/7rsIsPedbtGluzddhDhzAAHOcb+Q/Febl1UUatRR07YA21gNO5bWwAAk33vfv0XftoacaFt7d5O3ot7KWFtrRs/wgn5rilrl4M5TS8Hl/Zi7UBx8hdYmnsDpqeoGpXrxFbYfDT8Fx56GKW9hkeeoGh8wlDXc8mLnGXDPIOg7wuO+K1/l5r0VRQyR+83TYOHulddNEImSSSdljGue53QBouvTw51LoyyY1Vo8ri77COmb4SyEdRswH5ropBZr/un8F2dSXzSyzP0Mji6x6D9kD0/BcCpFoZD4W+JAW+Tps4GuTq+4orbdYlecBQqgaT1AHeb2PlZZBoGljp9rf4DZNGbZiuwwathw7F8IxGZr3RUdW2WRsdi8syuYbAkDS91wCFE3FSTi/IH0nFsc+i/G6iKqxKLFJJo4WU7S1lVEBG15flLY5ANyeikHF/BeAUdVFw3htSaiaxzTtcxj5Gghrp5JZHSkDoLfC9183Rcq0cOItugbZ7HgniHDsIxDHKnFppWmvijk5rWPkD5mSSSPBawbuzaeRC4XD3E8mCYvXVgikkocQkkNVCCGyhpkdIyRodpmbexB3vbqvNotvQhJttP3f4Itn0VtX9Ecdd+mmisNUJBVNoxDVGJk982dsJHLvfW2e1xpqvPY7xRW4tjFLicDTTNw5zDhsbyHFmR2fPIR1cd+4aeeuDhiSTDsLxGoxrBqGLE2OfSsrXzsksx2QtNmkafmuNimAYphMcNTMaaooZ3ZYK3D5hPSvdr2S4AEHTuWGKGHd3b65Bt0euqeKOA+IIqWTiHC6tlZAwMz0+cgC+YtZLBI1+Um+hHX1XVcScVUFfhceA4JQmjwmPIHcwNje9sZBYxsbSQG37RJcSbbDW/kHPY22Z7Rfa5AS4BGoudlrHS44yTXSFuZ7TjDiLBsaw7h+lonTOlp/rKnNE+MRHlNjyZnD3uoss6ribCMX4Rfh2Ll78ZpQxlIRE5xlezssmz+6LtuH3Ou/VeJJWJfGNHOZc9CRdHy0IxS+jsNzPd4ZxfglThEWCcUUUtTBAyOOKeFpkLmxjsOeAWvDmjQEHbz12u4t4VwTD6qi4Uw6ojqKoO5lVU3blcRlEjnPe6Rzhc5RcW+R8lhOFDE48flNQYhhWFSYiGiMP52UnsF1xb4FdY57GWzOa0u2uQL7DTyUfLYnLtv6obk0e1wviHCKPgrFcGlfL+kJjWxwxiN5EgqX3a7OBlFutz08VweCcXw7BcYlqa+R0dPLQyU3MbG+TK8yRvaXBgJt2SNuq8yC217iyZ472zNv3X1+C2+XjslFeSW32e4wTi7DsN4j4jrZo5f0di9S6QSNZeWHJI4xvc3cggnNrpp3ax1X9HOEVxxbDRiWJ1rZnVFLTzF8NJTyvJcZCZI2uJFzbR35jxJc0Xu4Cwub9yhfGBmL25e+4t8UnpYN2m+Rbmey4sx/A8VxPhrEKB07zR8p9YHxvYWtZOyYRjNu4dq9vDU9JxlxBhOL4pgdRQPllhoGxvlcYnx5iJ2yljWvAdoB3Lx4IIuDp8ljnYTlDmk9wIumtLCLTXgFJnsOOcewrHajCjh0kkjKWCYSOfG6Oz5XNcGAPHS2q2wcRYRHwLUYG58hxFxlibEI3FjmyVXP5gk92wHzXiy4C5JAA3J2WcLDUS08ETmF9RNDBGXOszPK8Ri5AOmvcp+XioKD6jyPcY/z/ugXIr6ObDa6sw+odEZ6SUxS8lxcwusDdtwDb+6FxwutNSVozaMERFB71BERA6AVURAULoiBAUEVKiKCgiIEwoIqp4JCoDdZDvQLIIBLk7GhGaHye4fmuyjjvYLr8N7Qmb3OYfiCu7p423DiQGjv+C9OEqxpnRCNs5tJTgmOPM2MOIBe++VhPU2Xb00JBBbpY2Ftrev86rj0sD5SOXG9/3GOd/pXf0uH1dh9Q8fes38dV5eozpds7bhBW2jdTuGUCRozdH+HcV2LGC17hYR0EotmyjwJuVzI6YNtc38gvCyZIt8Hn5s2P8AlZg0N2uO7a6pyjv9At4jYO8rMRs+z8rrlcjieVHFLrAZW37ySRb4LS6SXWwaPS5+a5rpKeLSSWGO5AGd7Wkk6dVXxRv6WNtwmpV2Ecq8o6aV1QQ4GR1juBYD5LzuJYM6btwTvLiMxjke57L9zS7Zevlp3NvfVveFwZISSbNvoT6L0dPn2O4nRGUZKn0fM6mnlgeY5WOY8dHDQ+S6jEBlhHi9o+RK+iY22COildJG1znEMpw4A9t2pcDvoLlfPMV0EDf60hv1OWwXvep6mJyOXJDbKjqf50WwMAyaAvewya3DGgEm5A3OmyxDXOcGtBLyLgAXK2Ou0xObkc2KLlyOcTywSXi2bYnwC4F0c+R0YggnMCTYEBxsLA67aNHooTYbWB1BNzfxA3PmVRmJaALW2fI05Gi37LWg+mn8RNBc9sknUkHM7xuf91SMkYn4dRtc+aiydYaX8rg6+QOvxWPXx6i+o81RQRETHQRETRmz1WO/+Ffo5/8Aa4j/AK404Ze6XBeP6KfWijwgV7Wu1bHVML3NcD3usD6Kmv4Sr8E4Yw/EavFqefCIKiOT2Omgex7pnBzhmkd4DouNXYxg8OF1GB4BS1UNJVyMkxGsr3NdW1pZ7rCI7gNGhGvhpft8C3ShsUeb/TkfC5PSuw3F8FpsMpMEbw3HI+ip6nEarFpaY1lXUzAlzXNm1EYvZtul/NJMPwOfFqvCo4MNEvEGANqYxRuhliosXgzuLKeUHRrrE2Fv8y6Goq+F+IafDZMWrKvDcVo6WOimmipPa6arhh0Y7KLODj5rq5psKw3EcNqcBlrJRQvhnfPWtax01SyQlxbGz9m1hr3qIYpPhvn7dv7lNo59BTRUPDOPYlUQQurcSrIsBwszsY8wuYSJ5mB4NiLkb/sr09Xh2K4JJBh2BxcMMpKeGJ1U/FZ6U1tdM5gMjqjnDMAdhb8NB5nivHKHGJqGLC45KfD6SOaVjHsDCKuplM0r8oJ62st1dVcJcSPgxDEa+swvFORFFXiOj9sp6kxNDGyRlpzA2Gt/yuScJyqUvN/mCO4kpcNoq76RBQez+zzcHuqzFTSNlghlfnMkTXM0tfUfeXW1dS7hTD+HqXDqahdX4lhsOK4lXVVMyplkdMSWxN5g90aj09Tw6Sv4aww8VU9E7EH0uI4E7DaZ9SxhllqnZs8kgYQA3ay2OreHcdw/BoMXrqvDsRwqmFC2phpjVw1VMwnICxpBDh/N/wBkUGmt6uP+gOxFHhtZiv0c4xHRU0MOPSye3UTGA03tFPmZIWxuGWxPS24WNLjUR4h/QbsJwdmDVGKT4W+lipI7nNLJGJuae3mvY3vYbWG410mKUFbxHwHh+GRzMwrB5mU1GagjmzOex7nzva3QZrAjy8bNpfwZhmN1uMOr8Sq6ykxCtnhwt1I2ECtEjwOZUNOQtBuR+exmnypXdcfqxeDbyaPAcCx2VlBQ1dZRcXVWHUdRW07J3RMEVmuIO5ABtfTW/RK/FBDgnDnETMNwv9OYj7XRyVjqVjmxtp5HDPHAPqszuriCQLgaHTpZ8ahqeHq6indI7EqziOTGJXNjAh5ckZDrOvve/QLXW4nR1HDnDeFx8z2rD5q+SqLmZYrTvLm5HXJO+q0jhlJpzXN8/aibPSSYTh2N45wZNLTQRRYpgf6XxSCntFFLJA2+XSwAcSA7wHx5tJDXVlQ+kxqLg+PApmTxGGjqKJstF2TynwvaA4uBAB1H5LzzeJqakqeDKulilmOEYQ3DsQilaIxKHjLK2Mgnpt6LQ6i+jozGq/S2L+yueZP0cyhaKhoJ1i9oJ5duih45X7rquOLKTRzKSSlwrhJuIMw/DqqubxHW0cNTW07JjEAxx5gBGp00uevguU2sFTScEcQy0dB+k3Y7Jg9U4U0bY5YzLkEroW2bnYB2dd/Kw8+/EqA8MQYOwTe1MxyfEDmaMgpnxuYBnB1dqOnRbGYvSw4FgFCwSvrsOx6TFZAWgROYHF7Wh+a5J0Gy19Jv8S5t/oKzn8Z4rJNiuNYb7DhkbIq1n9JhpWtrH5GaCSe9ze+ui8n1svR8RzcM4hPW4vQYjWPrK6aKQ0M1IY2wgts8mbY9LLzouurTJLGkRLswKgVRbnuUEKIgZAqhUCAKpZVEDCIiACIiACFESE0UKqDYKjdCVgjssLNppW/ajB+BAX0LhKhE889ZK1roaW8UWYAh07xdxIOnZFv8S+d4Zm9siaxpdJKHRRtG7nu1aB5my+3YVQsw6gpaS4vEzNO4dZHXdI/43t5BY63UbMGxdsWbJshS7Zy3zU0GUSyxR3FwHODTbvsFxn4thcd/rXSEdI43n5usPmvHY5xJh1NXSsmZUSTOZHI1kLW2ZE64Y1znuGtgDt+0uifxYx5IioS3o0zTk/EMZ+a5cPwx5EnJnkOclwfRJOIaVv6umnf3F7msH+W64kvElab8qmgZ98vkPyIXl6KPi7F6Z9XRUtKyma4Na+7TJLqA8xNkcb5dd7bL0UvDsFXRxiGpxKjqY3mN8sxDzPuSXM0aR3EZbePWpYNJge2XL/X9Sd02ceXHcacCeeIx+6iY35uBPzXWT4lWS6TV8zgdbGZ9vMtabfJeipeF+HoGE1RfVz65nV05IJ8IwQ1c13DnDs8bgaCGM62dTXiePHsH+KfzmkxPiH7IWybPBF8btjmPeRuO+7ui7XD8fxLDsjM3PphYcmUk5R+7ee0PIriYnh5wytfS8wvaGMmjeQA4sff3wNiNth59FxwG2s7LYb5nAWv4m34D16+u4YtRjTatM4fWljlyfRMOxjDcTbaCTLMBd8EvZlHpsR4hcmWljeHFvZdrfuK+WSOhic10dQzO1wc3K/6xp6EED87+C9BhnF1XTZIsRDqmG4AmZbnsG3aGzvNeJqPhWTH78HJ3YtUmaOJhUtqY4ZY3shiZaNxByyvfq9zXHe2g9F4PFeX7RTNkz8tsbnO5RaHkOcdAXAjp3L7fHLhWMUruW6Crpn2EjXDNlPc5ru0D6BeG4h4HlfPJWYUW1IbEG+wVUhZYi5DoZgRf7rtPHVVh1yUPSmqZ2SnuR8+IiDOyYjDYEgOe2Bh10mlfaR7vACy1OJIa+9hbsTSsyi3/AKeGxsPFZ1Da6CoLKqKSGogcAYp4shiLTmFoyA0DyFvxXGke+R7nvdme8kucba38l0+DD0mgXi+gJ6kvLi5x77Aj8FMx+yP838Viimx7UZZr7ADvPf6lYlETQmqF1QoqFSEVERUJoIiJkNFRRVBAUREGiQREQDN9JVVNFU09ZTScuppn8yGQNa7I6xF7PBHU9FhLLLNLNNK4vlmkfNK427UjyXOOlhr5LWqikuSWFVEVklURFLGkEURA6KqFLqjdNEGKIiZ9CEREAEREAEREwCIiQBERAAohUQJmQus2Ne42aCXHoFMoB+sJB+y2xcfMnZV0hDXBoDWdGN3cdLBzjqem6CbZ6vgnDWVOMxVknbiw0xu7P6s1MocI25jvlF3eq+m4vWRUVDPJKbMET5JT15MYu633jZo815/h3DjhOG0NO4WqHFtVVEb8+Wzy0/d0b/dXS8fYvn5WHROF5y2eYD9mmjJ5TT952Z391ee8bz51+R52ae6TPE1NTNWVVTVzfrKiR0zvC+zR5beQC2UdNJWVEFLHJFG+U5RJOS2JgAJLnFuui4o11XLopWwVMcjibND2mwv7zSF9CuqRyy4PrHDmH4Zg8MEPtwqKxrHh0hdkis9xksxjTkvrpqSvQzvGQXBNzbTQ7eC+a0mM4SwRU76gB5jj7eUiDNYdnP0XfQ4rV04a1x50G7WvNyG/u5B09SvAz6CbnvTtlKaqjn4gMRjYZKam9oY4hoyXL2k6DM0dP56Lm4N7fS0k0mJSwszy5mxhwyU7MoBbmJ1JSir6OrhkbC8cyxLonaSAeR0+CzmpIquKznFjxcNeLm3gQuPJK16eRV/QpJJ3Zwak8H1FYamulbNPlawGp5/s7A24Aaywj672XIfgfDdUA39HULonMzMdCxrL5hfM2WOx+a81WYPjj6o00VIXgjMKrMxtJbbtHPzL94svS4Rh7sHomUz5ZJ3NMs8jmA2Ln6lkLT07lrmhDFGLxZG39/8A1Ex9z5R4XH8HZg9TCyGR76Wqic+HmkGRmRwBY51tbdNP7py3HWMeRoDp3G9rjTS9/wAT5NG3oOLJ3VE+GuLSwCGdjWnSwL29nz7/APSd151u2176WGm3Tr8NfJvT6XROU8Md75PKze2b2nLp6uspJGz0cksdQLBnJNjJc5Q0tvYgmwGltd7r6jB7TyIPa3MdUiGP2h0QysdLls4sb9m97eRXguF6EVuJNqHjNT0AFQbtzMfO64ibe+41P7W242Xv3G3mdzt4leH8UlCWVRiuUd2mcnG5HzL6QjA7G6VkrXD/ALLpi2WMkvF5Zd2E2I+C8XLDIwZxaSImzZYrmMnucCAWnwIHruvcce0klRi1PLGQXNw6njLSLXAkl1BXiA6enkOVzo32yuBHvD7LmkEEei0xY5LDF0dyd/hZoUXKy0swtdtPL3a+zuPnu30uPLpplilicGysLHEXG1nN+00tJaR4goaKUk+Ga0VsokKgiImmQ0UKrFUK7JoqIiaE0EREyKCIiTZcQiIgGgiImS0FUUQTRVERBcQiIgGiqjdYoghoIiLQ9+gnVEQMIiIEEREwCIqgCJ8PVUC58B3myvZb7ozO+07/APUIBgMNg5xDWHq4G5+6Ame2kYLemc25h9dh6LHUkk6k7knVLIqyaAB/n+K5uHdmvw51mksqontDmhwzNOYXB8VxAuTQ/wDfqD/3DPwK0jHnkmbqLPqVHjEE5a2oAhk79TE8+B3HqmKYDhGMNBqostQG2iqqfK2Zo6AmxDm+Dr+m46Bq59JW1VNZrDmiG8b7uaPuncLHLpmvdjZ4ccj8nk8V4ZxfCs8uUVdE03FTTtddoH/WivcemYeI2XTtNwCLEHYjrfwX2KmraepADTkkP/LeRf8AunY+i6fFuEcLxAyT0lqGrcS4mNn9HlJ35kLdj4gfHYmLVuD25UacNcHzkLnUeI1lIMjHZ4esUlyzzb1Cxr8KxTCpBFXQFjXOIimZ24JvuPGnoQD4LjN7ugXqRcZq07MJcHpYMRhnLDG98U4ILW5srmu6FkgI/FezwDEcSqopTVupzTxghsz3hlQ4jQ5o7e7/AFrjXv3XysEDU7L0mA4nRMYyGpq4mmIVDnmQ3IB1a1rWgknawsuTWaZZMfHYoSpntqniGmhmZFBC6ZoP1shOQZe6MHc+JXX4jiQjfR4jh1RUsdPNHBMyWzo3h37t99Rt3LoJ6nEKyS2G4TXyQg6yyU0zS8d4uAAPAknyXJdhfE9ZTUcDMPFMIpBOZamqia7OAQBaPM75fDpwx0unhTk6+7LeRvpHE4jkkkxRzpHFzhTU7dTsHA6b2+fo666nRoJN7AEGwPTpb8rH7ulx6WPg7F5HOkqcQpGPeSXFjZqh+u+rsn89Cuzo+EKGCaCaerqKjkvjkbGGRRRlzCHAvAu6wNjbMBpsuyOv0+HGop8rrg5JafJOVs7PAMPOHYbBHI0Cpn/pVXoQebIL5TmJd2BZup6eg7EnM4d34d6ykdZuu536adQPBdLjtYaTD5GNP11Xmp2eDLfWO+Gnqvn4xnny35bPShHaqPIY1W/pDEKmoafqgRBTj9zHcA+up9V1M1LBO20rL9x1Dh5ELmZdrpk+C+1xY4xxrHXCPPzNxe5M89UYbUQXdHeWPw99o8QN/RcRkz2NLC1skN7mKW+S/e2xuHeIIXrcuy6XGaeKN1NM0APlL2yW0zZQLO/JcGp0sYLfEWn13qzWDIuzruTHNrSuOc/+XmcOaP7N9sjvLQ+e64xB6gggkEEEEEaEEHY+CyIvcWvfS3f5LdUkvFJK79ZNTB8hO78r3xtefEgA/wD9Xl9nqu4So4yKlRT0NrwFVETRBUCIqTEVE8UKdioKXRRJsaRUCiqVgyooFVYqCIiCKCIhQUgigVQVQVG6iJkNBERbHvUEREBQREQFBERAUFVFVSFRkR2dNr6rBW5GxHqLq5Wu27Lu47HyKAMVUIc0kG4I6EJfRNCKtsEjoJoZmgF0bw8B17EjyWsKrSImrVM9dQ4nR1eVl+TOf+VKdHf2b9iu1aPxt437tF8+Gq7ihxurpssc96iAANGc2lYP6jzuPNatNrg83Lo/OM9c0bfkuyp66eOzZQZGd5vzAPvHddRR1dHWsz08odlAzsd2ZWffbv8ADRc1o2XLkgpcM46lHhnfXpayGSJzY5oXtyyRytDmkHo5jtl0n/BnDZlfLkrAxxBEDKl7YWeDCBnt/fK2xlzXBzSQ4bEGxXaNlkLGEnUtaTsNfNefKM8X4HRSe7s4sHDnDcOrMMpnHvnDp3evOc5dnFDSU7Q2CGnhA6Qxxxf6AuPmcd3E+qo3XPLfL8TstKujmcxnV9/iVOcwbAn5LjBZBRsQHI53c0epV5r+lgtIWQUOKQ7pGTnOJGuq8bjNT7ZWyZTeKnBgi8cp7T/U/gvS4lU+zUsj2n6yRvKi+88G59Bcrx5Fvhb+P8V63w3D7nkZ04sftcjRkVDCSABc91r/AIKVNTS0rbzPsd2xtAMjj35ei6CsxSqnBawiCE9ktY7tP++/f0C9meZRVnFLSTzdcfmdlV4jSUpcwfXTtuOWxwyNP9d409AvP1E9VXTMLgXyOBbFHEwnK3uYwdFl7Pka19S4wttmbGADUOH9WM+6PF3wWt9Qchip2CGJ3vNYbySf20p7R8tu4Lz8ueWTgvDpMeB3BXL6sGKCG/tBEz+tPC+7AR0nmHzaL+fQ6ZZXzSGR9rmwAAytDQLBrW9ANgP4LdSxUcr3ipn5LA27dm5iOmcgj5fitdUynjmLaeXmxACziANTra4t+C55Qe3cUskfV2cuX24NBUWShWDNmRERJMzYREVklREQFEREUWVQREVITKgUVTJKhUCpVAREUUsCoFFUICooFVSEERF0nvoIqogGgiIgQREQARETAIqltUBwA42DXdpvcb6eRCuQO/V3Pe11g4eQ2+CmW+5IPQDUlXJ97/D/ALpEtEFwbd3etjCXusAS7oB1+KyGVxAkEp6BzGtEnzNlly9DlIdGDdzYjlaB++d0KcZUZuRlyXh7mAsflaHOcxwMYBF7lx0Ftisi2FrWZXufLdxkIaBEB0yH3j43ARkmUMJ5YY0h7C9n1LT3xxbvPifyWJfC8jlB7ez2+Y4Eudf3gGgNA8AuzFNSdEJts2xvkje18b3Me03a5ji1wPgQvSUHELgGx4g0u/fxNs7/AOpGPxC8y1bAux4Y5FUhzxwnxJH0iCSGZjZYZGyROOj2EFp8NF2cfuRj+qPwXy+krKuik5lLK5hNs4HuuHc9pBC73/izFi0Njio47AAuEb5CT39t2X5Lys+gySdQ5RxvRtP2s9qsw12+V3wXgH49jsujq6Ro10hayID/AO2AVx3VVTL+tqJ5P7SV7r/E2Wa+GZf5mkbQ0Tf4mfRXz0sV+bUQMtvnkYD8CbrQ7FsJZf8ApIeR/wBJj3fMgD5rwbH7fz81uEmi1XwuPmR1R0OFfiZ7B2PUQ0ZFM89C7I0fmfktD+IJj+rp4m+L3ueflYLzTZNNTYAXJJsAPFcSoxVjARCBK/YPP6seQT+Qwx5kbfL4FwonfV+JS1Ajlq5ImMiBawN7A7WugJuV52qxdzszKUZB1leAXnX9lp2XXvlqquRxLnyPAu4k5WRt8XEhoHqsHOpotOzUSjqcwp2+TSA53nYeu6dqC2wXAnGEev0Jy5ZQ6VzwyNzjmmmJIcf6v7TneXyWJmjh/wC7N7Y/8xLYy2/dt91v4+OtljeeqkJc/M4NHacQA1o0ytA0t4BapmSQPAda4Ac0j5FZuLa3Po5589sj2yjtPa8ZjfM8HtE9ST1W+GpoY4SyWkD5O127jtX8TqFrlq6maPlvcC0kE2bYnxK4vVQ5KL9hzThv4kQ736HUAa2UQlQrnk+RPjgHZYqqLNmbCIikmgiIgigiIqXQBERSWEREEhERUiCooiYFURFLKoIiIQioN1FRuqJZURVdp76CiqiQBVRVAERFUARVRVAmipdOiiBUXb1PcfwCvZ1GW5Pda/x2+Cx/nzWQF/AdADv6nUoEwRmsSG9kZbABrR11O62Mc5slOWuuLOIAFmtIv37rDSxFr2GwA08+g9PzUzgWIsS0EN6MaCLdnqfVIhqy545CS/svO7xctJ8W9P50Qtey17AHYg3afJwWvoN/G6ya9zL29127XAOafMFFjqujayYi2bYdevquSxwcNDcdLLigRP8AcIY4/wDLcSWn7jzr8fisQXscRqxw0IO67MWqceGB2AWxpXCZO02D7A9/T1XKadiNR0svThkhkXDIbo3hy2tcuOCjpo4/fIHgNyrlSVsFN+DmBywkrYYdL53/AGWnQeZXWS1krwQ3sM20OpHiVgIyA10zuU1wu1trzPHe1h1A8TovPy6pLjGWm/5mb5aupqC1pubkBscYJ18GgElC2OIf0h5dID+phIuD+8l1A8gSfJaTPZrmQt5bCLOsc0rx/Xfv8AAtJJFulumwt6rhlNy5bK3t8HIkqHyAM7LImm7Yo+ywHv7yfEklRghcwl8mUi+m1lrdJGW2DLO/BaSUWov6kN2Zl1jcE6HskEjTv0ULiSSTcne+v4rG6l1i5WZtglQnRCdFiszIIdkuopZDIiIoMmEREmhUERFLE0ERE0IIiJ0UERFImgiIkSwiIrEERFLKCIiAoKjdRE7JozUVRd57hEVUQMIqqgDFVEQAUVRADoiIgAL2Gg8r6n0Vvvf1AOvqoogVAkkW0sNgNAoqiKAgVQqBQSyrY2Q2DXgPYNgSbt+6QtaIIaNvLzaxEv01aQBI23eBofT4JHK+LYi3UE6fxWsXBB/DdbOY1/64En/qMtzP72oB9dfgqjJwdpkv7G51XJlOUNabb3zH0utTGySgyE2ZezpZDZt+4HcnyCxvTs2a6V370ZGDxLWk38rhR0kkhBe4G2jQLBrW9zWt7IHgE55p5OyfsbhJHERyhmeP+dILm/7thuB6kny2WvM9xcS65Ju4km5Pfqtd0us00MzzOB8Uc8u3ssLlLo3PpAZXUUuos7JZbpdRCggIVFEiCqIiloTQREUkNBERBARESaEERFKAIiKwCIiTQwiIpE0EREWSEREAEKIUhpEQIiCqM1UVXpUewRFURRSIqg6KoHRFFkVEiaIqqEKKAx6oqiYjFFkoigIiqIoCIqiTQmRERQSEV6IggiLJTqkSyIqiTERFVOqQmFLrJRSyWRAqqghkKiyQ7JEmCKogCIqilksiKokSyIqiRBEVRICIqiLAiKokxWRFCqNkhhDsg6qoEQIqiAIh71SoUDRFFVnF+th/tGf6gpKP/9k=" 
                            alt="Blockchain Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Blockchain Development</h3>
                        <p className="internship-description">
                            The Blockchain Development Internship includes hands-on experience in developing decentralized applications and blockchain architecture.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Additional Internship Cards */}
                    {/* Mobile App Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.netrootstech.com/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-05-at-3.27.45-PM.jpeg" 
                            alt="Mobile App Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Mobile App Development</h3>
                        <p className="internship-description">
                            Gain experience in building mobile applications using platforms like Android, iOS, and Flutter.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* UI/UX Design Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.doYHfVKgVncrGIL5jmSOMgHaE8?rs=1&pid=ImgDetMain" 
                            alt="UI/UX Design" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">UI/UX Design</h3>
                        <p className="internship-description">
                            Explore user-centric design principles, prototyping tools, and best practices for creating intuitive interfaces.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* DevOps Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/R.8d67bb983beaad634a8591fe0a79f859?rik=vuWSxMiT9Fxyxw&riu=http%3a%2f%2ftivasys.com%2fwp-content%2fuploads%2f2017%2f05%2fdevops-digram-1.png&ehk=hDy%2fchdwuEYDoNILp15XLM691%2f%2fx2uhTO%2fRXiEJu6s8%3d&risl=&pid=ImgRaw&r=0" 
                            alt="DevOps" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">DevOps</h3>
                        <p className="internship-description">
                            Learn continuous integration, deployment, and operations using tools like Docker, Jenkins, and Kubernetes.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Digital Marketing Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://th.bing.com/th/id/OIP.QcASAa4wJISuJXH1LT2T5wHaE8?rs=1&pid=ImgDetMain" 
                            alt="Digital Marketing" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Digital Marketing</h3>
                        <p className="internship-description">
                            Get hands-on experience in SEO, social media marketing, and performance analytics.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Game Development Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://bagogames-com.s3.amazonaws.com/wp-content/uploads/2021/08/03165341/unnamed.jpg" 
                            alt="Game Development" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Game Development</h3>
                        <p className="internship-description">
                            Dive into creating engaging games using engines like Unity, Unreal Engine, and Godot.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>

                    {/* Robotics Product Card */}
                    <div className="product-card">
                        <img 
                            src="https://www.tuas.com.tr/UserImages/BlogImages/robotics-engineer/robotics-engineer-f90ed2f1-4064-460f-9feb-13327403bcd3.jpg" 
                            alt="Robotics" 
                            width={200} 
                            height={200}
                            className="product-image"
                        />
                        <h3 className="internship-title">Robotics</h3>
                        <p className="internship-description">
                            Engage in designing and programming robotic systems for automation and problem-solving.
                        </p>
                        <Link to="/formpage" className="apply-button">Apply Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Internship;
