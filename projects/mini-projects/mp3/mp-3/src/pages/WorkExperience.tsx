import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: lightsalmon;
  min-height: 100vh;
  width: 70%;
  padding: 20px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
`;

export default function WorkExperience() {
    return (
        <StyledMain>
            <StyledH2>Work Experience</StyledH2>
            <h3>Pandit Deendayal Energy University (PDEU), Ahmedabad, India</h3>
            <p>
                <strong>Research Intern</strong> | May 2025 - Aug 2025
            </p>
            <ul>
                <li>
                    Corresponding Author, <em>Wildlife Re-ID: SimCLR + ResNet</em> — built
                    contrastive learning framework achieving 95.13% accuracy and 0.9488
                    F1-score on WildlifeReID-10k.
                </li>
                <li>
                    Co-Author, <em>AI in Banking Security</em> — benchmarked fraud detection
                    models, achieving AUC of 0.954 for real-world banking datasets.
                </li>
                <li>
                    Co-Author, <em>Blockchain for Welfare Programs</em> — proposed frameworks
                    for transparency and efficiency in welfare distribution across developing
                    nations.
                </li>
            </ul>
            <br />
            <br />
            <h3>DXFactor Solutions, Ahmedabad, India</h3>
            <p>
                <strong>Data Science Intern</strong> | May 2024 - July 2024
            </p>
            <ul>
                <li>
                    Automated reporting pipelines with Python + SQL, cutting manual workload
                    by 60%.
                </li>
                <li>
                    Digitized 5,000+ multilingual scanned documents via OCR (Tesseract +
                    OpenCV), enabling searchable storage.
                </li>
                <li>
                    Deployed classification models in Streamlit dashboards, scaling to 10K
                    docs/month, reducing triage effort by 40%.
                </li>
            </ul>
        </StyledMain>
    );
}