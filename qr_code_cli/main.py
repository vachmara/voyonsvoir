import qrcode

def generate_qr_code(url: str,version :int, output_file: str = "qr_code.png"):
    qr = qrcode.QRCode(
        version=version,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(output_file)
    print(f"QR code saved as: {output_file}")

if __name__ == "__main__":
    url = input("Entrez l'URL à encoder : ")
    generate_qr_code(url, version=3)
