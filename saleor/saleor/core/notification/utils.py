from django.conf import settings
from django.contrib.sites.models import Site
from django.contrib.staticfiles.storage import staticfiles_storage

from ..utils import build_absolute_uri, get_domain

LOGO_URL = "images/saylor-logo.svg"


def get_site_context():
    site: Site = Site.objects.get_current()
    site_context = {
        "domain": get_domain(),
        "site_name": getattr(settings, "SITE_NAME", None) or site.name,
        "logo_url": build_absolute_uri(staticfiles_storage.url(LOGO_URL)),
    }
    return site_context
