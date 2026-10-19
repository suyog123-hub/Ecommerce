
MAX_IMAGE_SIZE = 2 * 1024  # 2 KB

MAX_PDF_SIZE = 10 * 1024 * 1024  # 10 MB

MAX_DOCUMENT_SIZE = 10 * 1024 * 1024  # 10 MB

MAX_EXCEL_SIZE = 10 * 1024 * 1024  # 10 MB

MAX_CSV_SIZE = 5 * 1024 * 1024  # 5 MB

MAX_VIDEO_SIZE = 100 * 1024 * 1024 * 1024  # 1 GB

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB


ALLOWED_IMAGE_EXTENSIONS = {
    "jpg",
    "jpeg",
    "png",
}

ALLOWED_VIDEO_EXTENSIONS = {
    "mp4",
    "webm",
    "mov",
    "avi",
    "mkv",
}

ALLOWED_FILE_EXTENSIONS = {
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "csv",
    "txt",
}

ALLOWED_FILE_CONTENT_TYPES = {
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
    "text/plain",
}

