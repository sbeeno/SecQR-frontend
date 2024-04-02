// generate.js

document.addEventListener('DOMContentLoaded', function () {
    const urlInput = document.getElementById('urlInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const downloadContainer = document.getElementById('downloadContainer');

    generateBtn.addEventListener('click', function () {
        const url = urlInput.value.trim();
        if (url === '') {
            alert('URL을 입력하세요.');
            return;
        }

        // QR 코드 생성
        const qrCode = new QRCode(qrCodeContainer, {
            text: url,
            width: 128,
            height: 128,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        });

        // 다운로드 버튼 생성
        const downloadBtn = document.createElement('a');
        downloadBtn.textContent = '다운로드';
        downloadBtn.href = qrCode._el.firstChild.toDataURL('image/png');
        downloadBtn.download = 'qr_code.png';
        downloadContainer.innerHTML = ''; // 기존 다운로드 버튼 제거
        downloadContainer.appendChild(downloadBtn);
    });
});