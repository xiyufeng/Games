# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class OneOfUserInfoChurch(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self):  # noqa: E501
        """OneOfUserInfoChurch - a model defined in Swagger

        """
        self.swagger_types = {
        }

        self.attribute_map = {
        }

    @classmethod
    def from_dict(cls, dikt) -> 'OneOfUserInfoChurch':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The OneOfUserInfoChurch of this OneOfUserInfoChurch.  # noqa: E501
        :rtype: OneOfUserInfoChurch
        """
        return util.deserialize_model(dikt, cls)